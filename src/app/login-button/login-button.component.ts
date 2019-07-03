import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UserService } from '../shared/user.service';
import { SigninComponent } from '../signin/signin.component';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {

  loginText = 'Log In';

  constructor(public dialog: MatDialog, public userService: UserService) { }

  ngOnInit() {
    if (this.userService.isUserLoggedIn()) {
      this.loginText = 'Logout';
    } else {
      this.loginText = 'Log In';
    }
  }

  changeUserStatus() {
    if (this.userService.isUserLoggedIn()) {
     this.userService.logout();
     this.loginText = 'Log In';
    } else {
      this.openDialog();
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SigninComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
