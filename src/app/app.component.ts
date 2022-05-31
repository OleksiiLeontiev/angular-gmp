import { Component } from '@angular/core';
import { AuthorizationService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private authorizationService: AuthorizationService) {}

  title = 'angular-gmp';
  public pageView: string = 'default';

  onLoginClick(): void {
    this.pageView = 'login';
  }
  showLoginForm(): boolean {
    return (
      !this.authorizationService.isAuthenticated() && this.pageView === 'login'
    );
  }
}
