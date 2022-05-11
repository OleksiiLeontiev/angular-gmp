import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input()
  public text: string = '';

  @Input()
  public icon: string = '';

  @Input()
  public type: 'primary' | 'secondary' | 'text-button' = 'primary';

  @Input()
  public size: 'small' | 'medium' = 'medium';

  constructor() {}

  ngOnInit(): void {}
}
