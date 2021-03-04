import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignUpComponent],
      imports: [ReactiveFormsModule, FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invalid when empty', () => {
    expect(component.signUpForm.valid).toBeFalsy();
  });

  it('email address field validity when empty', () => {
    const email = component.signUpForm.controls['email'];
    expect(email.valid).toBeFalsy();
  });

  it('email address field errors required when empty', () => {
    const email = component.signUpForm.controls['email'];
    const errors = email.errors || {};
    expect(errors.required).toBeTruthy();
  });

  it('email address field errors required when not empty', () => {
    const email = component.signUpForm.controls['email'];
    email.setValue('test');
    const errors = email.errors || {};
    expect(errors.required).toBeFalsy();
  });

  it('email address field errors pattern invalid check', () => {
    const email = component.signUpForm.controls['email'];
    email.setValue('test');
    const errors = email.errors || {};
    expect(errors.email).toBeTruthy();
  });

  it('email address field errors pattern valid check', () => {
    const email = component.signUpForm.controls['email'];
    email.setValue('test@test.com');
    const errors = email.errors || {};
    expect(errors.email).toBeFalsy();
  });

  it('full name invalid when empty', () => {
    const fullName = component.signUpForm.controls['fullName'];
    expect(fullName.valid).toBeFalsy();
  });

  it('full name errors required when empty', () => {
    const fullName = component.signUpForm.controls['fullName'];
    const errors = fullName.errors || {};
    expect(errors.required).toBeTruthy();
  });

  it('full name errors lessThanTwoWords invalid ', () => {
    const fullName = component.signUpForm.controls['fullName'];
    fullName.setValue('abc ');
    const errors = fullName.errors || {};
    expect(errors.lessThanTwoWords).toBeTruthy();
  });

  it('full name errors lessThanTwoWords valid ', () => {
    const fullName = component.signUpForm.controls['fullName'];
    fullName.setValue('abc qwerty');
    const errors = fullName.errors || {};
    expect(errors.lessThanTwoWords).toBeFalsy();
  });

  it('password field error required when empty', () => {
    const password = component.signUpForm.controls['password'];
    const errors = password.errors || {};
    expect(errors.required).toBeTruthy();
  });

  it('password field error required when not empty', () => {
    const password = component.signUpForm.controls['password'];
    password.setValue('testpassword');
    const errors = password.errors || {};
    expect(errors.required).toBeFalsy();
  });

  it('password field error when text is too short', () => {
    const password = component.signUpForm.controls['password'];
    password.setValue('qwerty');
    const errors = password.errors || {};
    expect(errors.minlength).toBeTruthy();
  });

  it('password field error when text have min 8 chars', () => {
    const password = component.signUpForm.controls['password'];
    password.setValue('qwertyui');
    const errors = password.errors || {};
    expect(errors.minlength).toBeFalsy();
  });

  it('password confirmed valid check', () => {
    const password = component.signUpForm.controls['password'];
    const confirmedPassword =
      component.signUpForm.controls['confirmedPassword'];
    password.setValue('qwertyuiop');
    confirmedPassword.setValue('qwertyuiop');
    const errors = component.signUpForm.errors || {};
    expect(errors.notConfirmed).toBeFalsy();
  });

  it('password confirmed invalid check', () => {
    const password = component.signUpForm.controls['password'];
    const confirmedPassword =
      component.signUpForm.controls['confirmedPassword'];
    password.setValue('qwertyuiop');
    confirmedPassword.setValue('qwerty');
    const errors = component.signUpForm.errors || {};
    expect(errors.notConfirmed).toBeTruthy();
  });

  it('form valid when filled', () => {
    const {
      email,
      fullName,
      password,
      confirmedPassword,
    } = component.signUpForm.controls;
    email.setValue('test@test');
    fullName.setValue('abc abc');
    password.setValue('testpassword');
    confirmedPassword.setValue('testpassword');
    expect(component.signUpForm.valid).toBeTruthy();
  });
});
