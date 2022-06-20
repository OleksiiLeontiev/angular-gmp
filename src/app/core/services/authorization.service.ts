import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from '../models/authorization';
import { User } from '../models/user';

const fakeUser: User = {
  id: 1,
  firstName: 'FirstName',
  lastName: 'LastName',
  email: '',
};

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  public isAuth: boolean = !!localStorage.getItem('accessToken');
  constructor(private router: Router) {}

  login(loginFormData: LoginForm): void {
    fakeUser.email = loginFormData.email;
    const userInfo = JSON.stringify(fakeUser);
    localStorage.setItem('accessToken', 'fakeToken');
    localStorage.setItem('userInfo', userInfo);
    this.isAuth = true;
  }
  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userInfo');
    this.isAuth = false;
    this.router.navigate(['/login']);
  }
  isAuthenticated(): boolean {
    return this.isAuth;
  }
  getUserInfo(): User {
    return JSON.parse(localStorage.getItem('userInfo') || '{}');
  }
}
