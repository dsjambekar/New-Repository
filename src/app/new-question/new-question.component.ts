import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {

  constructor(fb: FormBuilder) {
    this.newQuestion = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  newQuestion: FormGroup;
  listOptions: any = [];

  atValues = [
    { id: 1, value: 'Fredrik Sundqvist', link: 'https://google.com' },
    { id: 2, value: 'Patrik Sjölin' }
  ];
  hashValues = [
    { id: 3, value: 'Fredrik Sundqvist 2' },
    { id: 4, value: 'Patrik Sjölin 2' }
  ];

  quillConfig = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['code-block'],
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        // [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        // [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        // [{ 'direction': 'rtl' }],                         // text direction

        // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        // [{ 'font': [] }],
        // [{ 'align': [] }],
         ['link', 'image']
      ],
      handlers: {'emoji': function() {}}
    },
    keyboard: {
      bindings: {
        // shiftEnter: {
        //   key: 13,
        //   shiftKey: true,
        //   handler: (range, context) => {
        //     // Handle shift+enter
        //     console.log("shift+enter")
        //   }
        // },
        enter: {
          key: 13,
          handler: (range, context) => {
            console.log('enter');
            return true;
          }
        }
      }
    }
  };

  ngOnInit() {
    // this.listOptions  = [new Option(), new Option()];
  }

  addOption(index) {
    if (index === -1) {
    this.listOptions.splice(index + 1, 0, new Option());
    index = 0;
    }
    this.listOptions.splice(index + 1, 0, new Option());
  }

  removeOption(index) {
    if(this.listOptions.length == 2){
    this.listOptions.splice(0, 1);
    index = 0;
    }
    this.listOptions.splice(index, 1);
  }
}
