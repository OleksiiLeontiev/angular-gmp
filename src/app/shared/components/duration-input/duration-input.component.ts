import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.scss'],
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
  public inputModel: any = '';

  @Output()
  public inputModelChange = new EventEmitter<typeof this.inputModel>();

  constructor() {}

  onInputChange($event: any) {
    this.inputModelChange.emit($event);
  }

  ngOnInit(): void {}
}
