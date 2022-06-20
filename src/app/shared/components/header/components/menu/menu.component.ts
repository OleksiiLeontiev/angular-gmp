import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/core/services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(private authorizationService: AuthorizationService) {}

  ngOnInit(): void {}

  isAuthenticated() {
    return this.authorizationService.isAuthenticated();
  }
  onLogoutClick(): void {
    this.authorizationService.logout();
  }
}
