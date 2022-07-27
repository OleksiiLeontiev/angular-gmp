import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Breadcrumbs } from 'src/app/shared/models';
import { Course, CoursesState } from '../../models/course';
import { deleteCourse, getCoursesList, selectCoursesList } from '../../store';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit, OnDestroy {
  public breadcrumbsData: Breadcrumbs[] = [
    {
      title: 'Courses',
    },
  ];

  public searchValue: string = '';
  public courses: Course[] = [];

  readonly coursesList$: Observable<Course[]> =
    this.store.select(selectCoursesList);

  private loadMoreIndex: number = 3;
  private readonly destroy$ = new Subject<boolean>();

  get coursesLength(): number {
    return this.courses.length;
  }

  constructor(
    private store: Store<CoursesState>,
    private translateService: TranslateService
  ) {
    this.translateService
      .get('BREADCRUMBS.COURSES')
      .subscribe((res: string) => {
        this.breadcrumbsData[0].title = res;
      });

    this.coursesList$
      .pipe(takeUntil(this.destroy$))
      .subscribe((list: Course[]) => {
        if (this.courses.length) {
          this.courses.push(...list);
          this.loadMoreIndex++;
        } else {
          this.courses = [...list];
        }
      });
  }

  ngOnInit(): void {
    this.courses = [];
    this.getCourses(0, 3, this.searchValue);
  }

  async loadMoreClick() {
    this.getCourses(this.loadMoreIndex, 1, this.searchValue);
  }

  deleteCourse(course: Course) {
    const deleteConfirm = confirm(
      this.translateService.instant('COURSES_PAGE.DELETE_CONFIRM_MESSAGE', {
        courseName: course.name,
      })
    );

    if (deleteConfirm) {
      this.courses = [];
      this.loadMoreIndex = 3;
      this.store.dispatch(
        deleteCourse({
          id: course.id,
          currentTextFragment: this.searchValue,
        })
      );
      console.log(`delete id=${course.id}`);
    }
  }

  identify(index: number, item: any): string {
    return item.id;
  }

  getCourses(start: number, count: number, textFragment: string) {
    this.store.dispatch(
      getCoursesList({
        start,
        count,
        textFragment,
      })
    );
  }

  onSearch(value: string) {
    this.searchValue = value;
    this.courses = [];
    this.getCourses(0, 3, this.searchValue);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
