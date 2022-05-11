import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-search',
  templateUrl: './courses-search.component.html',
  styleUrls: ['./courses-search.component.scss'],
})
export class CoursesSearchComponent implements OnInit {
  @Input()
  searchValue: string = '';

  constructor() {}

  ngOnInit(): void {}

  searchClick() {
    console.log(this.searchValue);
  }
}
