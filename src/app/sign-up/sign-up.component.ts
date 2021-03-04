import {
  lessThanTwoWordsValidator,
  confirmPasswordValidator,
} from './../validators';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  signUpForm = new FormGroup(
    {
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
      }),
      fullName: new FormControl('', {
        validators: [Validators.required, lessThanTwoWordsValidator],
      }),
      password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(8)],
      }),
      confirmedPassword: new FormControl('', {
        validators: [Validators.required],
      }),
    },
    { validators: [confirmPasswordValidator] }
  );

  get controls() {
    return this.signUpForm.controls;
  }

  onSubmit() {
    const {
      email,
      fullName,
      password,
      confirmedPassword,
    } = this.signUpForm.value;
    alert(
      `Entered data is correct email: ${email}, fullName: ${fullName}, password: ${password}, password confirmed: ${confirmedPassword} `
    );
  }
}
