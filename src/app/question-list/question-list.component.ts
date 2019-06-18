import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from '../new-question/question.service';
import { UserModel } from '../shared/user.model';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions:any = [];
  @Input() user: UserModel;

  constructor(public service:QuestionService) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.questions = [];
    if(this.user){
      this.service.getQuestionByUser(this.user.id).subscribe((data: {}) => {
        console.log(data);
        this.questions = data;
      });
    } else{
      this.service.getAllPublicQuestions().subscribe((data: {}) => {
        console.log(data);
        this.questions = data;
      });
    }
  }
}
