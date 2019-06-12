import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: UserService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.isUserLoggedIn()) {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}
