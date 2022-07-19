import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { AuthState } from '../../state/authorization';
import { selectIsAuthenticated } from '../../state/authorization/authorization.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private store: Store<AuthState>) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.select(selectIsAuthenticated).pipe(
      tap((status: boolean) => {
        // console.log('GUARD - ', status);
        if (!status) {
          this.router.navigate(['/login']);
        }
      })
    );
  }
}
