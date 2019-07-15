import { Component, OnInit, Input, AfterViewInit, ViewChild } from '@angular/core';
import { QuestionService } from '../new-question/question.service';
import { UserModel } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { FilterBarComponent } from '../filter-bar/filter-bar.component';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit, AfterViewInit {
  questions:any = [];
  @Input() user: UserModel;

  @ViewChild(FilterBarComponent)
  private filterComponent: FilterBarComponent;

  constructor(public service:QuestionService, public userService: UserService) { }

  ngOnInit() {
    this.getQuestions();
  }

  ngAfterViewInit() {
  }

  getQuestions() {
    this.questions = [];
    if(this.user){
      this.service.getAllQuestionsByUser(this.filterComponent.searchText,
        this.filterComponent.questionType,
        this.filterComponent.difficultyLevel,
        this.user._id
        )
        .subscribe((data: {}) => {
        console.log(data);
        this.questions = data;
      });
    } else{
      this.service.getAllPublicQuestions(this.filterComponent.searchText,
        this.filterComponent.questionType,
        this.filterComponent.difficultyLevel,
        '',
        true)
        .subscribe((data: {}) => {
        this.questions = data;
      });
    }
  }

  onSearchClicked() {
   this.getQuestions();
  }
}
