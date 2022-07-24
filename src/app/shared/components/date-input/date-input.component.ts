import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  ControlContainer,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => DateInputComponent),
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => DateInputComponent),
    },
  ],
})
export class DateInputComponent implements OnInit {
  @Input()
  public label: string = '';

  @Input()
  public name: string = '';

  @Input()
  public placeholder: string = '';

  @Input()
  public required: boolean = false;

  @Input()
  public formControlName: any;

  @Input()
  public errorMessage: string = '';

  public dateFormGroup: any;

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit(): void {
    if (this.controlContainer && this.formControlName) {
      this.dateFormGroup = this.controlContainer.control;
    }
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const dateFormat =
      /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/;
    if (!dateFormat.test(control.value)) {
      return {
        datePattern: true,
      };
    }
    return null;
  }

  registerOnChange() {}
  writeValue() {}
  registerOnTouched() {}
}
