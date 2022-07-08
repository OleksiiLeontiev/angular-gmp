import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { User } from 'src/app/core/models';
import { AuthorizationService } from 'src/app/core/services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, OnDestroy {
  public userName: string = '';
  private subs: Subscription[] = [];
  readonly isAuthenticated$ = this.authorizationService.isAuthenticated$;
  private readonly destroy$ = new Subject<boolean>();

  constructor(private authorizationService: AuthorizationService) {
    this.authorizationService.userData$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: User | null) => {
        if (data) {
          this.userName = `${data.name.first} ${data.name.last}`;
        }
      });
  }

  ngOnInit(): void {}

  onLogoutClick(): void {
    this.authorizationService.logout();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
