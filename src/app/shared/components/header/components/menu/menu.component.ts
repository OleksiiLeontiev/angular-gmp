import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { User } from 'src/app/core/models';
import { AuthState, logout } from 'src/app/core/state/authorization';
import {
  selectIsAuthenticated,
  selectUser,
} from 'src/app/core/state/authorization/authorization.selectors';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, OnDestroy {
  public userName: string = '';

  readonly isAuthenticated$: Observable<boolean> = this.store.select(
    selectIsAuthenticated
  );
  readonly userData$: Observable<User | null> = this.store.select(selectUser);
  private readonly destroy$ = new Subject<boolean>();

  constructor(private store: Store<AuthState>) {
    this.userData$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: User | null) => {
        if (data) {
          this.userName = `${data.name.first} ${data.name.last}`;
        }
      });
  }

  ngOnInit(): void {}

  onLogoutClick(): void {
    this.store.dispatch(logout());
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
