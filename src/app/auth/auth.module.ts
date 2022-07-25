import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPage } from './pages/login/login.page';
import { ResetPasswordPage } from './pages/reset-password/reset-password.page';
import { AuthShellComponent } from './auth-shell/auth-shell.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';
import { ResetPasswordOtpComponent } from './pages/reset-password-otp/reset-password-otp.component';

@NgModule({
  declarations: [LoginPage, ResetPasswordPage, AuthShellComponent, ResetPasswordOtpComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgOtpInputModule,
    ReactiveFormsModule,
    AuthRoutingModule,
  ],
})
export class AuthModule {}
