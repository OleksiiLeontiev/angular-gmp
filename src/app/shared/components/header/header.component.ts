import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public minHeader: boolean = false;
  private routerEventsSubscription!: Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.routerEventsSubscription = this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        const routeData = data?.state?.root?.firstChild?.data;
        this.minHeader = routeData?.['minHeader'] ? true : false;
      }
    });
  }

  ngOnDestroy(): void {
    this.routerEventsSubscription.unsubscribe();
  }
}
