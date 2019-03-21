import { User } from './../user/user.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup-screen',
  templateUrl: './app-signup-component.html',
  styleUrls: ['./app-signup-component.css'],
})

export class SignupScreenComponent implements OnInit {

  hide = true;
  signupForm: FormGroup;
  passwordNotCheck = false;

  ngOnInit() {
    // formgroup le pasamos un object json
    this.signupForm = new FormGroup({
      fullName: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
      ]),
      password: new FormControl(null, Validators.required),
      passwordConfirmation: new FormControl(null, Validators.required),

      /*
      getErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' : '';
      }
      */

    });
  }

  /*
  onSubmit() {
    if (this.signupForm.valid) {
      const {fullName, email, password, passwordConfirmation} = this.signupForm.value;
      const user = new User ( fullName, email, password, passwordConfirmation);
      console.log(user);
    }
  }
  */

 onSubmit() {
    if (this.signupForm.valid && this.signupForm.value.password === this.signupForm.value.passwordConfirmation) {
      const{fullName, email, password, passwordConfirmation} = this.signupForm.value;
      const user = new User(fullName, email, password, passwordConfirmation);
      this.passwordNotCheck = false;
      console.log(user);
    }
    if (this.signupForm.valid && this.signupForm.value.password !== this.signupForm.value.passwordConfirmation) {
      this.passwordNotCheck = true;
    }
  }

}
