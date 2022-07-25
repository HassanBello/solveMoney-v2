import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthShellComponent } from './auth-shell/auth-shell.component';
import { LoginPage } from './pages/login/login.page';
import { ResetPasswordOtpComponent } from './pages/reset-password-otp/reset-password-otp.component';
import { ResetPasswordPage } from './pages/reset-password/reset-password.page';

const routes: Routes = [
  {
    path: '',
    component: AuthShellComponent,
    children: [
      {
        path: 'login',
        component: LoginPage
      },
      {
        path: 'reset-password',
        component: ResetPasswordPage
      },
      {
        path: 'otp',
        component: ResetPasswordOtpComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
