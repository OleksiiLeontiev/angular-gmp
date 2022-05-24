import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-courses-search',
  templateUrl: './courses-search.component.html',
  styleUrls: ['./courses-search.component.scss'],
})
export class CoursesSearchComponent implements OnInit {
  searchValue: string = '';

  @Output()
  searchValueChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onSearch() {
    this.searchValueChange.emit(this.searchValue);
  }
}
