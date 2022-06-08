import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public emailValue: string = '';
  public passwordValue: string = '';

  constructor(
    private authorizationService: AuthorizationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onLogin() {
    this.authorizationService.login({
      email: this.emailValue,
      password: this.passwordValue,
    });
    this.router.navigate(['/']);
  }
}
