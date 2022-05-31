import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public emailValue: string = '';
  public passwordValue: string = '';

  constructor(private authorizationService: AuthorizationService) {}

  ngOnInit(): void {}

  onLogin() {
    this.authorizationService.login({
      email: this.emailValue,
      password: this.passwordValue,
    });
  }
}
