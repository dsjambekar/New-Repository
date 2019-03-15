import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  nameFormControl = new FormControl('', [
    Validators.required
  ]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  messageFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor() { }

  ngOnInit() {
  }

  submit(){
    alert('Hi ' + this.nameFormControl.value + '! Your message is saved!');
  }
}
