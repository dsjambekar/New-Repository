import { Component, OnInit, Input } from '@angular/core';
import { MatDialog,  } from '@angular/material';
import { QuestionPaperDialogComponent } from '../question-paper/question-paper-dialog/question-paper-dialog.component';
import { QuestionPaperService } from '../question-paper/question-paper.service';
import { UserService } from '../shared/user.service';
import { UserModel } from '../shared/user.model';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {

  @Input() question: any;
  questionPapers: DialogData[] = new Array();
  // questionPapers: any;
  user: UserModel = null;

  constructor(public dialog: MatDialog, public service:QuestionPaperService, public userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getUser();

     if(this.user) {
      this.service.getAllQuestionPapersByUser(
        this.user._id
        )
        .subscribe((data) => {
        for(const qp of data) {
          const newObj: DialogData = {
            isSelected: false,
            questionPaper: qp
          };
          this.questionPapers.push(newObj);
        }
      });
     }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(QuestionPaperDialogComponent, {
      data: {questionPapers: this.questionPapers}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

export interface DialogData {
  isSelected: boolean;
  questionPaper: any;
}

