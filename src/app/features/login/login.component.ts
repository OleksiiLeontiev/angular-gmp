import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public loginForm: FormGroup = this.fb.group({
    login: '',
    password: '',
  });

  constructor(
    private authorizationService: AuthorizationService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  onLogin() {
    this.authorizationService.login(this.loginForm.value).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
