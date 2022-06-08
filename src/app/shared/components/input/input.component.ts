import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
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
  public inputModel: any = '';

  @Output()
  public inputModelChange = new EventEmitter<typeof this.inputModel>();

  constructor() {}

  ngOnInit(): void {}
}
