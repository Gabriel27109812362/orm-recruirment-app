import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const lessThanTwoWordsValidator: ValidatorFn = (
  control: AbstractControl
): { [key: string]: any } | null => {
  const fullName = control.value as string;
  const fullNameArr = fullName.trim().split(' ');

  if (fullNameArr[0] !== '' && fullNameArr.length < 2) {
    return { lessThanTwoWords: true };
  }
  return null;
};

export const confirmPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password')?.value as string;
  const confirmedPassword = control.get('confirmedPassword')?.value as string;

  return confirmedPassword !== '' && password !== confirmedPassword
    ? { notConfirmed: true }
    : null;
};
