import { Component, forwardRef, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

export interface IValidatorMessage {
  validationName: string;
  validationMessage: string;
}

@Component({
  selector: 'S-Input',
  templateUrl: './s-input.component.html',
  styleUrls: ['./s-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SInputComponent),
    },
  ],
})
export class SInputComponent implements ControlValueAccessor {
  @Input() placeHolder: string = 'placeholder text';
  @Input() prefix: boolean = false;
  @Input() suffix: boolean = false;
  @Input() type: string = 'text';
  @Input() controlName: string = 'custom-input-1';
  @Input() parentForm!: FormGroup;
  @Input() validators?: IValidatorMessage[] = [];
  @Input() inputMode:
  | 'text'
  | 'decimal'
  | 'numeric'
  | 'tel'
  | 'search'
  | 'email'
  | 'url'
  | 'none' = 'text';
  customType = 'password';
  showPassword: Boolean = false;
  public value: any = '';
  touched: boolean = false;

  public changed = (value: any) => {};

  public onTouched = (_: any) => {};

  public isDisabled: boolean = false;

  constructor() {}

  setInputType() {
    if (this.showPassword) {
      this.customType = 'text';
      return;
    }
    this.customType = 'password';
  }

  get formField(): FormControl {
    return this.parentForm?.get(this.controlName) as FormControl;
  }

  onChange(event: Event) {
    const value: any = (<HTMLInputElement>event.target).value;
    this.changed(value);
  }

  writeValue(value: any) {
    this.changed = value;
  }

  registerOnChange(changeFn: any) {
    this.changed = changeFn;
  }

  registerOnTouched(touchedFn: any) {
    this.onTouched = touchedFn;
  }

  setDisabledState(disabled: boolean) {
    this.isDisabled = disabled;
  }

  markAsTouched() {
    this.touched = !this.touched;
  }
}
