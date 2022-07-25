import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  template: `
    <div class="flex flex-col w-full">
      <a
        class="text-blue-600 flex mb-14 text-sm"
        [routerLink]="['/auth', 'login']"
        routerLinkActive="router-link-active"
        ><img
          class="mr-3
    "
          src="assets/svgs/arrow.svg"
        />
        Back to login</a
      >
      <h1 class="font-700 text-5xl text-blue-600 mb-2">
        Reset your<br />
        password here
      </h1>
      <p class="text-lg text-gray-600 mb-16">
        Please, provide your existing phone number
      </p>

      <ng-otp-input
        [formCtrl]="otpControl"
        [config]="{ length: 5 }"
      ></ng-otp-input>

      <s-button
        type="primary"
        size="large"
        label="Reset Password"
        [isDisabled]="otpControl.invalid"
      ></s-button>
    </div>
  `,
})
export class ResetPasswordOtpComponent {
  otpControl: FormControl;
  constructor() {
    this.otpControl = new FormControl('', Validators.required);
  }
}
