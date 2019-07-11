import { Injectable, Inject } from '@angular/core';
import { SocialUser } from 'angular-6-social-login';
import { UserModel } from './user.model';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

import { WindowRef } from '../WindowRef';

const endpoint = environment.backendEndpoint + 'users/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( @Inject(PLATFORM_ID) private platformId: any,
  @Inject('LOCALSTORAGE') private localStorage: any,
  private winRef: WindowRef, private http: HttpClient) {}

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  signIn(userData: SocialUser) {
    if (isPlatformBrowser(this.platformId)) {
      // localStorage will be available: we can use it.

    // localStorage.setItem('userid', userData.id);
    // localStorage.setItem('useremail', userData.email);
    // localStorage.setItem('username', userData.name);
    // localStorage.setItem('userimage', userData.image);
    // localStorage.setItem('usertoken', userData.token);
    // localStorage.setItem('useridToken', userData.idToken);

    this.verifyUser(userData.idToken).subscribe((userPayload) => {
      let userInfo: any;
      this.getUserInfo(userData.id).subscribe((data: {}) => {
        userInfo = data;
        if (!userInfo._id) {
          userInfo = new UserModel();
          userInfo.id = userData.id;
          userInfo.email = userData.email;
          userInfo.name = userData.name;
          userInfo.givenName = userPayload.given_name;
          userInfo.familyName = userPayload.family_name;
          userInfo.image = userPayload.picture;
          userInfo.locale = userPayload.locale;
          userInfo.token = userPayload.token;
          this.addNewUser(userInfo).subscribe((result) => {
            console.log(result);
            userInfo._id = result;
            this.localStorage.setItem('userInfo',JSON.stringify(userInfo));
            this.winRef.nativeWindow.location.reload(true);
          }, (err) => {
            console.log(err);
          });
        } else{
          this.localStorage.setItem('userInfo',JSON.stringify(userInfo));
          this.winRef.nativeWindow.location.reload(true);
        }
      });

    }, (err) => {
      console.log(err);
      alert(err);
    });

  }
}

  addNewUser(userData: SocialUser) {
    return this.http.post<any>(endpoint + 'create', JSON.stringify(userData), httpOptions).pipe(
      tap((userData) => console.log(`added new user w/ id=${userData.id}`)),
      catchError(this.handleError<any>('addUser'))
    );
  }

  getUserInfo(id: string): Observable<any> {
    return this.http.get(endpoint + id).pipe(
      map(this.extractData));
  }

  verifyUser (idToken): Observable<any> {
    return this.http.get(endpoint + idToken + '/verify').pipe(
      map(this.extractData));
  }

  getUser() {
    if (isPlatformBrowser(this.platformId)) {
    let user = new UserModel();
    if (this.localStorage.getItem('userInfo') != null) {
      user = JSON.parse(this.localStorage.getItem('userInfo'));
    }
    // user.id = localStorage.getItem('userid');
    // user.email = localStorage.getItem('useremail');
    // user.name = localStorage.getItem('username');
    // user.image = localStorage.getItem('userimage');
    return user;
  }
  }
  isUserLoggedIn() {
    if (isPlatformBrowser(this.platformId)) {
    if (localStorage.getItem('userInfo') != null) {
      return true;
    } else {
      return false;
    }
  } else {return false; }
  }

  logout() {
  if (isPlatformBrowser(this.platformId)) {
    //   localStorage.removeItem('userid');
    // localStorage.removeItem('useremail');
    // localStorage.removeItem('username');
    // localStorage.removeItem('userimage');
    localStorage.removeItem('userInfo');
    this.winRef.nativeWindow.location.reload(true);
  }}


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
