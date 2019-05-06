import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserModel } from 'src/app/user.model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();

  user: UserModel = null;
  constructor(public userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
}
