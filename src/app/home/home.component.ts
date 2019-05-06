import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: UserModel = null;
  constructor(public userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
  }

}
