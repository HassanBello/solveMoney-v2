import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SButtonComponent } from './components/s-button/s-button.component';
import { SInputComponent } from './components/s-input/s-input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    FontAwesomeModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [
    SButtonComponent,
    SInputComponent
  ], exports: [
    SButtonComponent,
    SInputComponent
  ]
})
export class SharedModule { }
