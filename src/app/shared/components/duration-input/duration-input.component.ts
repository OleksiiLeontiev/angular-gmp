import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
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

  public durationFormGroup: any;

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit(): void {
    if (this.controlContainer && this.formControlName) {
      this.durationFormGroup = this.controlContainer.control;
    }
  }

  registerOnChange() {}
  writeValue() {}
  registerOnTouched() {}
}
