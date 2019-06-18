import { Component, OnInit } from '@angular/core';
import { UserModel } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-my-repo',
  templateUrl: './my-repo.component.html',
  styleUrls: ['./my-repo.component.css']
})
export class MyRepoComponent implements OnInit {
  user: UserModel = null;

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
  }
}
