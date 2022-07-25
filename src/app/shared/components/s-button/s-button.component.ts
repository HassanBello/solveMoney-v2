import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 's-button',
  template: `<button
    [class]="'btn ' + 'btn-' + type + ' btn-' + size"
    (click)="doClick.emit($event)"
    [disabled]="isDisabled"
  >
    {{ label }}
  </button>`,
  styleUrls: ['./s-button.component.scss'],
})
export class SButtonComponent {
  @Input() type: 'primary' | 'secondary' | 'destructive' | 'success' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() label: string = 'Click Me';
  @Input() loading: boolean = false;
  @Input() isDisabled: boolean = false;
  @Output() doClick = new EventEmitter<Event>();

  loadingIcon = faCircleNotch
  constructor() {}
}
