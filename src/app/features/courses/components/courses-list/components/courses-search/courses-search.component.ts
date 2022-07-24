import {
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { filter, debounceTime, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-courses-search',
  templateUrl: './courses-search.component.html',
  styleUrls: ['./courses-search.component.scss'],
})
export class CoursesSearchComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<boolean>();

  public searchControl!: FormControl;

  @Output()
  searchValueChange = new EventEmitter<string>();

  @ViewChild('searchInput', { static: true })
  searchInput!: ElementRef<HTMLElement>;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.subsribeToSearch();
  }

  private subsribeToSearch = (): void => {
    this.searchControl = this.fb.control('');
    this.searchControl.valueChanges
      .pipe(
        filter((text) => text.length > 2 || text.length === 0),
        debounceTime(1000),
        takeUntil(this.destroy$)
      )
      .subscribe((value) => this.searchValueChange.emit(value));
  };

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
