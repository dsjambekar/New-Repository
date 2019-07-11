import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { QuestionService } from './question.service';
import { UserService } from '../shared/user.service';
import { UserModel } from '../shared/user.model';


@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {

  user: UserModel = null;
  constructor(public fb: FormBuilder, public service:QuestionService,public userService: UserService) {
    this.newQuestion = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
      questionType: new FormControl(''),
      difficultyLevel: new FormControl(''),
      isPublic: new FormControl(true),
      question: new FormControl('', Validators.required),
      explanation: new FormControl(''),
      options: fb.array([])
    });
  }

  showHideExplanation = false;

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
    this.user = this.userService.getUser();
  }

  addOption(index) {
    if (index === -1) {
    this.options.insert(0,
      this.fb.group({
      isCorrect: 'false',
      body: '',
    }));
    index = 0;
    }

    this.options.insert(index + 1,
      this.fb.group({
      isCorrect: 'false',
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

  addExplantion(){
    this.showHideExplanation = !this.showHideExplanation;
  }

  onSubmit() {
    console.log(this.user);
    const obj = {
      difficultyLevel: this.newQuestion.value.difficultyLevel,
      questionType: this.newQuestion.value.questionType,
      isPublic: this.newQuestion.value.isPublic,
      body: this.newQuestion.value.question,
      options: this.newQuestion.value.options,
      explanation: this.newQuestion.value.explanation,
      createdBy: this.user._id,
      // createdById: this.user.id,
      // createdByName: this.user.givenName + ' ' + this.user.familyName,
      // createdByImage: this.user.image,
      createdAt: Date.now()
    };
    this.service.addQuestion(obj).subscribe((result) => {
      alert('Question successfully added!');
      this.newQuestion.reset();
    }, (err) => {
      console.log(err);
      alert(err);
    });
  }
  }


