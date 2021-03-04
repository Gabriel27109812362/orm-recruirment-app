import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignInComponent],
      imports: [ReactiveFormsModule, FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.signInForm.valid).toBeFalsy();
  });

  it('email address field validity when empty', () => {
    const email = component.signInForm.controls['email'];
    expect(email.valid).toBeFalsy();
  });

  it('email address field errors required when empty', () => {
    const email = component.signInForm.controls['email'];
    const errors = email.errors || {};
    expect(errors.required).toBeTruthy();
  });

  it('email address field errors required when not empty', () => {
    const email = component.signInForm.controls['email'];
    email.setValue('test');
    const errors = email.errors || {};
    expect(errors.required).toBeFalsy();
  });

  it('email address field errors pattern invalid check', () => {
    const email = component.signInForm.controls['email'];
    email.setValue('test');
    const errors = email.errors || {};
    expect(errors.email).toBeTruthy();
  });

  it('email address field errors pattern valid check', () => {
    const email = component.signInForm.controls['email'];
    email.setValue('test@test.com');
    const errors = email.errors || {};
    expect(errors.email).toBeFalsy();
  });

  it('password field error required when empty', () => {
    const password = component.signInForm.controls['password'];
    const errors = password.errors || {};
    expect(errors.required).toBeTruthy();
  });

  it('password field error required when not empty', () => {
    const password = component.signInForm.controls['password'];
    password.setValue('testpassword');
    const errors = password.errors || {};
    expect(errors.required).toBeFalsy();
  });

  it('form valid when filled', () => {
    const { email, password } = component.signInForm.controls;
    email.setValue('test@test');
    password.setValue('testpassword');
    expect(component.signInForm.valid).toBeTruthy();
  });
  
});
