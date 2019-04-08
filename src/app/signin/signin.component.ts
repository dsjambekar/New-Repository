import { Component } from '@angular/core';

import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider,
  LinkedinLoginProvider
} from 'angular-6-social-login';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HeaderComponent } from '../navigation/header/header.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent {

  constructor( private socialAuthService: AuthService,public userService: UserService,
    public dialogRef: MatDialogRef<HeaderComponent>) {}

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform === 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } else if (socialPlatform === 'linkedin') {
      socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        this.userService.signIn(userData);
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
