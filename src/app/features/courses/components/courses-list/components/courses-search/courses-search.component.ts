import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { fromEvent, map, filter, debounceTime, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-courses-search',
  templateUrl: './courses-search.component.html',
  styleUrls: ['./courses-search.component.scss'],
})
export class CoursesSearchComponent implements AfterViewInit, OnDestroy {
  private readonly destroy$ = new Subject<boolean>();

  @Output()
  searchValueChange = new EventEmitter<string>();

  @ViewChild('searchInput')
  searchInput!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    if (this.searchInput.nativeElement) {
      fromEvent(this.searchInput.nativeElement, 'keyup')
        .pipe(
          map((e: any) => {
            return (e.target as HTMLInputElement).value;
          }),
          filter((text) => text.length > 2 || text.length === 0),
          debounceTime(1000),
          takeUntil(this.destroy$)
        )
        .subscribe({
          next: (searchValue) => {
            this.searchValueChange.emit(searchValue);
          },
        });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
