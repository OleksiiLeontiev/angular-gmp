import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input()
  minHeader: boolean = true;

  @Output()
  loginClickEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onLoginClick(): void {
    this.loginClickEvent.emit();
  }
}
