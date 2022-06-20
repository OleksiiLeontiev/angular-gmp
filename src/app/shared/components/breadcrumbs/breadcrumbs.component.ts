import { Component, Input, OnInit } from '@angular/core';
import { Breadcrumbs } from '../../models';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {
  @Input()
  public breadcrumbsItems!: Breadcrumbs[];

  constructor() {}

  ngOnInit(): void {
    console.log(this.breadcrumbsItems);
  }

  identify(index: number, item: Breadcrumbs): string {
    return item.title;
  }
}
