import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/shared/user.model';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { QuestionService } from 'src/app/new-question/question.service';
import { UserService } from 'src/app/shared/user.service';
import { QuestionPaperService } from '../question-paper.service';

@Component({
  selector: 'app-new-question-paper',
  templateUrl: './new-question-paper.component.html',
  styleUrls: ['./new-question-paper.component.css']
})
export class NewQuestionPaperComponent implements OnInit {
  user: UserModel = null;
  newQuestionPaper: FormGroup;

  constructor(public fb: FormBuilder, public service: QuestionPaperService,public userService: UserService) {
    this.newQuestionPaper = fb.group({
      isPublic: new FormControl(true),
      questionPaperTitle: new FormControl('', Validators.required),
    });
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

  onSubmit() {
    const obj = {
      isPublic: this.newQuestionPaper.value.isPublic,
      title: this.newQuestionPaper.value.questionPaperTitle,
      createdBy: this.user._id,
      createdAt: Date.now()
    };
    this.service.addQuestionPaper(obj).subscribe((result) => {
      alert('Question successfully added!');
      this.newQuestionPaper.reset();
    }, (err) => {
      console.log(err);
      alert(err);
    });
  }

}
