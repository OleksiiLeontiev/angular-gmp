import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthorizationService } from 'src/app/core/services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Output()
  loginClickEvent = new EventEmitter();

  @Output()
  logoutClickEvent = new EventEmitter();

  constructor(private authorizationService: AuthorizationService) {}

  ngOnInit(): void {}

  isAuthenticated() {
    return this.authorizationService.isAuthenticated();
  }
  onLoginClick(): void {
    this.loginClickEvent.emit();
  }
  onLogoutClick(): void {
    this.logoutClickEvent.emit();
    this.authorizationService.logout();
  }
}
