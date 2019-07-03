import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from '../new-question/question.service';
import { UserModel } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions:any = [];
  @Input() user: UserModel;

  constructor(public service:QuestionService, public userService: UserService) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.questions = [];
    if(this.user){
      this.service.getQuestionByUser(this.user.id).subscribe((data: {}) => {
        this.questions = data;
      });
    } else{
      this.service.getAllPublicQuestions().subscribe((data: {}) => {
        this.questions = data;
      });
    }
  }
}
