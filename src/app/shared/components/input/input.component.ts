import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';

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
export class InputComponent implements OnInit {
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
  public formControlName: any;

  public inputFormGroup: any;

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit(): void {
    if (this.controlContainer && this.formControlName) {
      this.inputFormGroup = this.controlContainer.control;
    }
  }

  registerOnChange() {}
  writeValue() {}
  registerOnTouched() {}
}
