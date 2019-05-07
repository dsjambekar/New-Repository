import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {

  newQuestion: FormGroup;
  listOptions: any = [];

  constructor(fb: FormBuilder) {
    this.newQuestion = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  ngOnInit() {
    // this.listOptions  = [new Option(), new Option()];
  }

  addOption(index) {
    if(index === -1)
    {
    this.listOptions.splice(index + 1, 0, new Option());
    index = 0;
    }
    this.listOptions.splice(index + 1, 0, new Option());
  }

  removeOption(index) {
    this.listOptions.splice(index, 1);
  }
}
