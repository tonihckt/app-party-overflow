import { User } from './../user/user.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-signin-screen',
  templateUrl: './app-signin-component.html',
  styleUrls: ['./app-signin-component.css'],
})

export class SigninScreenComponent implements OnInit {

  hide = true;
  signinForm: FormGroup;

  ngOnInit() {
    // formgroup le pasamos un object json
    this.signinForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
      ]),
      password: new FormControl(null, Validators.required),

      /*
      getErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' : '';
      }
      */

    });
  }

  onSubmit() {
    if (this.signinForm.valid) {
      const {email, password} = this.signinForm.value;
      const user = new User ( email, password);
      console.log(user);
    }
  }
}
