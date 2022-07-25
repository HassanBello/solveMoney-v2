import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IValidatorMessage } from 'src/app/shared/components/s-input/s-input.component';

@Component({
  templateUrl: './login.page.html',
})
export class LoginPage {
  loginForm: FormGroup;
  phoneNumberConfig: IValidatorMessage[] = [
    {
      validationName: 'required',
      validationMessage: 'Please input your phone number',
    },
  ];
  passwordConfig: IValidatorMessage[] = [
    {
      validationName: 'required',
      validationMessage: 'Please input your password',
    },
  ];
  constructor() {
    this.loginForm = new FormGroup({
      phoneNumber: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
}
