import { disappear } from '../../animations';
import { FormControls } from '../../types';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  animations: [disappear],
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

  onSubmit(): void {
    const { email, password } = this.signInForm.value;
    alert(`Entered data is correct, email: ${email}, password: ${password}`);
  }

  get controls(): FormControls {
    return this.signInForm.controls;
  }
}
