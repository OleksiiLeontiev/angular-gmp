import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-courses-search',
  templateUrl: './courses-search.component.html',
  styleUrls: ['./courses-search.component.scss'],
})
export class CoursesSearchComponent implements OnInit {
  @Input()
  searchValue: string = '';

  @Output()
  searchValueChange = new EventEmitter<string>();

  @Output()
  searchClickEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  searchClick() {
    this.searchClickEvent.emit(this.searchValue);
  }
}
