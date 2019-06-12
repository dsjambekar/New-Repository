import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserModel } from 'src/app/shared/user.model';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  user: UserModel = null;
  constructor(public userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
