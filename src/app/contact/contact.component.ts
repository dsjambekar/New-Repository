import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { ContactService } from './contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactDetails } from '../shared/contact';

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

  constructor(public rest: ContactService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    alert('Hi ' + this.nameFormControl.value + '! Your message is saved!');
    const contactDetails = new ContactDetails();
    contactDetails.Name = this.nameFormControl.value;
    contactDetails.Email = this.emailFormControl.value;
    contactDetails.Description = this.messageFormControl.value;
    this.rest.addProduct(contactDetails).subscribe((result) => {
      //console.log(result);
      //need to do something with the result
    }, (err) => {
      //console.log(err);
    });
  }
}
