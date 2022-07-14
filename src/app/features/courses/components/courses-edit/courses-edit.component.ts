import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Breadcrumbs } from 'src/app/shared/models';
import { Course, CoursesState } from '../../models/course';
import {
  createCourse,
  getCourseById,
  selectCourse,
  updateCourse,
} from '../../store';

@Component({
  selector: 'app-courses-edit',
  templateUrl: './courses-edit.component.html',
  styleUrls: ['./courses-edit.component.scss'],
})
export class CoursesEditComponent implements OnDestroy {
  private operationType: 'edit' | 'create' = 'create';

  public breadcrumbsData: Breadcrumbs[] = [
    {
      title: 'Courses',
      link: '/courses',
    },
  ];

  private readonly destroy$ = new Subject<boolean>();

  get pageTitle(): string {
    return this.operationType === 'edit' ? 'Edit Course' : 'New Course';
  }

  readonly course$: Observable<Course | null> = this.store.select(selectCourse);

  public courseForm!: FormGroup;

  constructor(
    private store: Store<CoursesState>,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    const courseId = this.route.snapshot.params['id'];
    if (courseId) {
      this.store.dispatch(getCourseById({ id: courseId }));
      this.course$
        .pipe(takeUntil(this.destroy$))
        .subscribe((course: Course | null) => {
          if (course) this.createForm(course);
        });
    } else {
      this.createForm();
    }
  }

  onSave() {
    if (this.operationType === 'edit') {
      this.store.dispatch(updateCourse(this.courseForm.value));
    } else {
      this.store.dispatch(createCourse(this.courseForm.value));
    }
  }

  createForm(course?: Course): void {
    if (course) {
      this.operationType = 'edit';
      this.courseForm = this.fb.group({
        ...course,
        authors: [
          {
            id: '5b7a846290d6ff6894377fb5',
            name: 'Decker Albert',
          },
        ],
      });
      this.breadcrumbsData.push({
        title: this.courseForm.value.name,
      });
    } else {
      this.courseForm = this.fb.group({
        id: Date.now(),
        name: '',
        description: '',
        length: 60,
        date: '',
        isTopRated: false,
        authors: [
          {
            id: '5b7a846290d6ff6894377fb5',
            name: 'Decker Albert',
          },
        ],
      });
      this.breadcrumbsData.push({
        title: 'New course',
      });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
