import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { fromEvent, map, filter, debounceTime, Subscription } from 'rxjs';

@Component({
  selector: 'app-courses-search',
  templateUrl: './courses-search.component.html',
  styleUrls: ['./courses-search.component.scss'],
})
export class CoursesSearchComponent implements OnInit, OnDestroy {
  private searchElement!: HTMLInputElement | null;
  private subs: Subscription[] = [];

  @Output()
  searchValueChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this.searchElement = document.querySelector('.search__input');

    if (this.searchElement) {
      const searchEvent = fromEvent(this.searchElement, 'keyup').pipe(
        map((e) => (e.target as HTMLInputElement).value),
        filter((text) => text.length > 2 || text.length === 0),
        debounceTime(1000)
      );

      this.subs.push(
        searchEvent.subscribe({
          next: (searchValue) => {
            this.searchValueChange.emit(searchValue);
          },
        })
      );
    }
  }

  ngOnDestroy(): void {
    this.subs.forEach((item) => item.unsubscribe);
  }
}
