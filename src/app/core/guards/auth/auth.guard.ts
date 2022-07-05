import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../../services';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authorizationService: AuthorizationService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.authorizationService.isAuthenticated$;
  }

  checkLogin(): Observable<boolean> {
    this.authorizationService.isAuthenticated$.subscribe(
      (isLoggedIn: boolean) => {
        if (!isLoggedIn) {
          this.router.parseUrl('/login');
        }
      }
    );

    return this.authorizationService.isAuthenticated$;
  }
}
