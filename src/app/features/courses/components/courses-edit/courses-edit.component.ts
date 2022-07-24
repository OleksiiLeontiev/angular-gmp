import { Component, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Breadcrumbs } from 'src/app/shared/models';
import { CoursesService } from '../../courses.service';
import { Author, Course, CoursesState } from '../../models/course';
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

  public authorsList: Author[] = [];

  private readonly destroy$ = new Subject<boolean>();

  get pageTitle(): string {
    return this.operationType === 'edit' ? 'Edit Course' : 'New Course';
  }

  readonly course$: Observable<Course | null> = this.store.select(selectCourse);

  public courseForm!: FormGroup;

  constructor(
    private store: Store<CoursesState>,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private coursesService: CoursesService
  ) {
    const courseId = this.route.snapshot.params['id'];
    this.coursesService
      .getAuthorsList()
      .pipe(takeUntil(this.destroy$))
      .subscribe((authors: Author[]) => {
        this.authorsList = authors;
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
      });
  }

  onSave() {
    if (this.courseForm.status === 'INVALID') return;
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
        id: course.id,
        name: new FormControl(course.name, [
          Validators.maxLength(50),
          Validators.required,
        ]),
        description: new FormControl(course.description, [
          Validators.maxLength(500),
          Validators.required,
        ]),
        length: new FormControl(course.length, Validators.required),
        date: new FormControl(course.date, Validators.required),
        isTopRated: course.isTopRated,
        authors: [course.authors],
      });
      this.breadcrumbsData.push({
        title: this.courseForm.value.name,
      });
    } else {
      this.courseForm = this.fb.group({
        id: Date.now(),
        name: new FormControl('', [
          Validators.maxLength(50),
          Validators.required,
        ]),
        description: new FormControl('', [
          Validators.maxLength(500),
          Validators.required,
        ]),
        length: new FormControl(60, Validators.required),
        date: new FormControl('', Validators.required),
        isTopRated: false,
        authors: [],
      });
      this.breadcrumbsData.push({
        title: 'New course',
      });
    }
  }

  getErrorMessage(fieldName: string): string {
    const formField = this.courseForm.get(fieldName);
    if (formField?.touched && formField?.errors) {
      const errors = Object.keys(formField.errors);
      let errorMessage = '';
      switch (errors[0]) {
        case 'maxlength':
          errorMessage = `Max length - ${formField.errors['maxlength'].requiredLength}`;
          break;
        case 'required':
          errorMessage = 'This field is required';
          break;
        case 'onlyNumbers':
          errorMessage = 'Only numbers is allowed';
          break;
        case 'datePattern':
          errorMessage = 'Must match MM/DD/YYYY';
          break;
        case 'authorsRequired':
          errorMessage = 'Authors - required field';
          break;
      }

      return errorMessage;
    }
    return '';
  }

  getCourseAuthors(): Author[] {
    return this.courseForm.get('authors')?.value || [];
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
