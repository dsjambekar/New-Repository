import { Injectable, Inject } from '@angular/core';
import { SocialUser } from 'angular-6-social-login';
import { UserModel } from './user.model';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { WindowRef } from '../WindowRef';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( @Inject(PLATFORM_ID) private platformId: any,
  @Inject('LOCALSTORAGE') private localStorage: any,
  private winRef: WindowRef) {}

  signIn(userData: SocialUser) {
    if (isPlatformBrowser(this.platformId)) {
      // localStorage will be available: we can use it.

    localStorage.setItem('userid', userData.id);
    localStorage.setItem('useremail', userData.email);
    localStorage.setItem('username', userData.name);
    localStorage.setItem('userimage', userData.image);
    // localStorage.setItem('usertoken', userData.token);
    // localStorage.setItem('useridToken', userData.idToken);
    console.log('Welcome ' + userData.name);
    this.winRef.nativeWindow.location.reload(true);
  }
}

  getUser() {
    if (isPlatformBrowser(this.platformId)) {
    const user = new UserModel();
    user.id = localStorage.getItem('userid');
    user.email = localStorage.getItem('useremail');
    user.name = localStorage.getItem('username');
    user.image = localStorage.getItem('userimage');
    return user;
  }
  }
  isUserLoggedIn() {
    if (isPlatformBrowser(this.platformId)) {
    if (localStorage.getItem('userid') != null) {
      return true;
    } else {
      return false;
    }
  } else {return false; }
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('userid');
    localStorage.removeItem('useremail');
    localStorage.removeItem('username');
    localStorage.removeItem('userimage');
    this.winRef.nativeWindow.location.reload(true);
  }}
}
