import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  ControlContainer,
  AbstractControl,
  ValidationErrors,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
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
export class MultiselectInputComponent implements OnInit {
  @Input()
  public list: ListModel[] = [];

  @Input()
  public selectedList: ListModel[] = [];

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

  public mselectFormGroup: any;

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit(): void {
    if (this.controlContainer && this.formControlName) {
      this.mselectFormGroup = this.controlContainer.control;
    }
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value?.length) {
      return {
        authorsRequired: true,
      };
    }
    return null;
  }

  registerOnChange() {}
  writeValue() {}
  registerOnTouched() {}
}
