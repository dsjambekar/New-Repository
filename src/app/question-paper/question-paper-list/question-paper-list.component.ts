import { Component, OnInit } from '@angular/core';
import { QuestionPaperService } from '../question-paper.service';
import { UserService } from 'src/app/shared/user.service';
import { UserModel } from 'src/app/shared/user.model';

@Component({
  selector: 'app-question-paper-list',
  templateUrl: './question-paper-list.component.html',
  styleUrls: ['./question-paper-list.component.css']
})
export class QuestionPaperListComponent implements OnInit {
  user: UserModel = null;
  questionPapers:any = [];

  constructor(public service: QuestionPaperService,public userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    this.getQuestions();
  }

  getQuestions() {
    this.questionPapers = [];
    if(this.user) {
      this.service.getAllQuestionPapersByUser(
        this.user._id
        )
        .subscribe((data: {}) => {
        console.log(data);
        this.questionPapers = data;
      });
    }
  }

}
