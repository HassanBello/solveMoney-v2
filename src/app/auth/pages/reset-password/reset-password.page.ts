import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IValidatorMessage } from 'src/app/shared/components/s-input/s-input.component';

@Component({
  templateUrl: './reset-password.page.html',
})
export class ResetPasswordPage {
  loginForm: FormGroup;
  phoneNumberConfig: IValidatorMessage[] = [
    {
      validationName: 'required',
      validationMessage: 'Please input your phone number',
    },
  ];

  constructor(public router: Router) {
    this.loginForm = new FormGroup({
      phoneNumber: new FormControl('', Validators.required)
    });

   }

}
