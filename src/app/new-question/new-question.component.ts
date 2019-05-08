import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';


@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {

  constructor(public fb: FormBuilder) {
    this.newQuestion = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
      questionType: new FormControl(''),
      difficultyLevel: new FormControl(''),
      isPublic: new FormControl(true),
      question: new FormControl('', Validators.required),
      explanation: new FormControl('', Validators.required),
      options: fb.array([])
    });
  }

  newQuestion: FormGroup;
  listOptions: any = [];

  get options() {
    return this.newQuestion.get('options') as FormArray;
  }

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
  }

  addOption(index) {
    if (index === -1) {
    this.options.insert(0,
      this.fb.group({
      isCorrect: '',
      body: '',
    }));
    index = 0;
    }

    this.options.insert(index + 1,
      this.fb.group({
      isCorrect: '',
      body: '',
    }));
  }

  removeOption(index) {
    if(this.options.length === 2){
    this.options.removeAt(0);
    index = 0;
    }
    this.options.removeAt(index);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.newQuestion.value);
  }
}
