import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question-paper-detail',
  templateUrl: './question-paper-detail.component.html',
  styleUrls: ['./question-paper-detail.component.css']
})
export class QuestionPaperDetailComponent implements OnInit {
  @Input() questionPaperModel: any;

  constructor() { }

  ngOnInit() {
  }

}
