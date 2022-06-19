import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = this.fb.group({
    email: '',
    password: '',
  });

  constructor(
    private authorizationService: AuthorizationService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  onLogin() {
    this.authorizationService.login(this.loginForm.value);
    this.router.navigate(['/']);
  }
}
