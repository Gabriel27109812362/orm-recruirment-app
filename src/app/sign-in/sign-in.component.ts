import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  signInForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', { validators: [Validators.required] }),
  });

  onSubmit() {
    const { email, password } = this.signInForm.value;
    alert(`Entered data is correct, email: ${email}, password: ${password}`);
  }

  get controls() {
    return this.signInForm.controls;
  }
}
