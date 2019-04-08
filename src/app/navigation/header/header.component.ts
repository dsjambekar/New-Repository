import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SigninComponent } from 'src/app/signin/signin.component';
import { MatDialog } from '@angular/material';
import { UserService } from 'src/app/user.service';
import { userInfo } from 'os';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginText = 'Log In';
  @Output() public sidenavToggle = new EventEmitter();

  constructor(public dialog: MatDialog, public userService: UserService) { }

  ngOnInit() {
    if(this.userService.isUserLoggedIn()){
      this.loginText = 'Logout';
    } else {
      this.loginText = 'Log In';
    }
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  changeUserStatus(){
    if(this.userService.isUserLoggedIn()){
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
      console.log('The dialog was closed');
    });
  }

}
