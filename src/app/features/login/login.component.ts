import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthorizationService } from 'src/app/core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
  public loginForm: FormGroup = this.fb.group({
    login: '',
    password: '',
  });

  private sub!: Subscription;

  constructor(
    private authorizationService: AuthorizationService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  onLogin() {
    this.sub = this.authorizationService
      .login(this.loginForm.value)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
