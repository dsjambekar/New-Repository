import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { UserModel } from '../../shared/user.model';

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
