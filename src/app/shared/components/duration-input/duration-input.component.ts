import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';
@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => DurationInputComponent),
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => DurationInputComponent),
    },
  ],
})
export class DurationInputComponent implements OnInit {
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

  public durationFormGroup: any;

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit(): void {
    if (this.controlContainer && this.formControlName) {
      this.durationFormGroup = this.controlContainer.control;
    }
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (isNaN(control.value)) {
      return {
        onlyNumbers: true,
      };
    }
    return null;
  }

  registerOnChange() {}
  writeValue() {}
  registerOnTouched() {}
}
