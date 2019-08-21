import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { QuestionDetailComponent } from 'src/app/question-detail/question-detail.component';

@Component({
  selector: 'app-question-paper-dialog',
  templateUrl: './question-paper-dialog.component.html',
  styleUrls: ['./question-paper-dialog.component.css']
})
export class QuestionPaperDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<QuestionDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(){

  }
}
