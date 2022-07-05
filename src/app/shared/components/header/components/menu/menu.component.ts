import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
  constructor(private authorizationService: AuthorizationService) {
    this.subs.push(
      this.authorizationService.userData$.subscribe((data: User | null) => {
        if (data) {
          this.userName = `${data.name.first} ${data.name.last}`;
        }
      })
    );
  }

  ngOnInit(): void {}

  isAuthenticated() {
    return this.authorizationService.isAuthenticated$;
  }
  onLogoutClick(): void {
    this.authorizationService.logout();
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
