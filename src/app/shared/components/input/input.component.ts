import { Component, forwardRef, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputComponent),
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input()
  public label: string = '';

  @Input()
  public type: 'text' | 'textarea' | 'number' | 'email' | 'password' = 'text';

  @Input()
  public name: string = '';

  @Input()
  public size: 'small' | 'medium' | 'default' = 'default';

  @Input()
  public placeholder: string = '';

  @Input()
  public required: boolean = false;

  @Input()
  public errorMessage: string = '';

  readonly control = new FormControl();

  constructor() {}

  onTouched = () => {};

  writeValue(value: any): void {
    this.control.patchValue(value, { emitEvent: true });
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  registerOnChange(fn: any): void {
    this.control.valueChanges.subscribe(fn);
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.control.disable() : this.control.enable();
  }
}
