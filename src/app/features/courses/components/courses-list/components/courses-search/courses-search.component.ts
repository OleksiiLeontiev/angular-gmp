import {
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { fromEvent, map, filter, debounceTime, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-courses-search',
  templateUrl: './courses-search.component.html',
  styleUrls: ['./courses-search.component.scss'],
})
export class CoursesSearchComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<boolean>();

  @Output()
  searchValueChange = new EventEmitter<string>();

  @ViewChild('searchInput', { static: true })
  searchInput!: ElementRef<HTMLElement>;

  constructor() {}

  ngOnInit(): void {
    this.subsribeToSearchKeyup();
  }

  private subsribeToSearchKeyup = (): void => {
    if (this.searchInput.nativeElement) {
      fromEvent(this.searchInput.nativeElement, 'keyup')
        .pipe(
          map((e: any) => (e.target as HTMLInputElement).value),
          filter((text) => text.length > 2 || text.length === 0),
          debounceTime(1000),
          takeUntil(this.destroy$)
        )
        .subscribe((value) => this.searchValueChange.emit(value));
    }
  };

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
