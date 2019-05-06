import { Injectable } from '@angular/core';
import { SocialUser } from 'angular-6-social-login';
import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {}

  signIn(userData: SocialUser) {
    localStorage.setItem('userid', userData.id);
    localStorage.setItem('useremail', userData.email);
    localStorage.setItem('username', userData.name);
    localStorage.setItem('userimage', userData.image);
    // localStorage.setItem('usertoken', userData.token);
    // localStorage.setItem('useridToken', userData.idToken);
    console.log('Welcome ' + userData.name);
    window.location.reload(true);
  }

  getUser() {
    const user = new UserModel();
    user.id = localStorage.getItem('userid');
    user.email = localStorage.getItem('useremail');
    user.name = localStorage.getItem('username');
    user.image = localStorage.getItem('userimage');
    return user;
  }

  isUserLoggedIn() {
    if (localStorage.getItem('userid') != null) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('userid');
    localStorage.removeItem('useremail');
    localStorage.removeItem('username');
    localStorage.removeItem('userimage');
    window.location.reload(true);
  }
}
