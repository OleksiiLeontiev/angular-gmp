import { Component, forwardRef, Input } from '@angular/core';
import {
  AbstractControl,
  ValidationErrors,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormControl,
} from '@angular/forms';
import { ListModel } from '../../models';

@Component({
  selector: 'app-multiselect-input',
  templateUrl: './multiselect-input.component.html',
  styleUrls: ['./multiselect-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => MultiselectInputComponent),
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => MultiselectInputComponent),
    },
  ],
})
export class MultiselectInputComponent implements ControlValueAccessor {
  @Input()
  public list: ListModel[] = [];

  @Input()
  public selectedList: ListModel[] = [];

  @Input()
  public label: string = '';

  @Input()
  public placeholder: string = '';

  @Input()
  public required: boolean = false;

  @Input()
  public formControlName: any;

  @Input()
  public errorMessage: string = '';

  readonly control = new FormControl();

  value: any;

  constructor() {}

  onTouched = () => {};

  writeValue(value: any): void {
    this.control.patchValue(value, { emitEvent: false });
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

  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value?.length) {
      return {
        authorsRequired: true,
      };
    }
    return null;
  }
}
