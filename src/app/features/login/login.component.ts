import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthState, login } from 'src/app/core/state/authorization';

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

  constructor(private store: Store<AuthState>, private fb: FormBuilder) {}

  onLogin() {
    this.store.dispatch(login(this.loginForm.value));
  }
}
