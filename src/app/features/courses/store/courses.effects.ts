import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';
import { CoursesService } from '../courses.service';
import { Course } from '../models/course';
import * as CoursesActions from './';

@Injectable()
export class CoursesEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private coursesService: CoursesService
  ) {}

  getCoursesList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.getCoursesList),
      switchMap((props) => {
        return this.coursesService.getCoursesList(props).pipe(
          map((coursesList: Course[]) =>
            CoursesActions.getCoursesListSuccess({
              list: coursesList,
            })
          )
        );
      })
    )
  );

  deleteCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.deleteCourse),
      switchMap((props) => {
        return this.coursesService.removeCourse(props.id).pipe(
          map(() =>
            CoursesActions.getCoursesList({
              start: 0,
              count: 3,
              textFragment: props.currentTextFragment,
            })
          )
        );
      }),
      ofType(CoursesActions.getCoursesList),
      switchMap((props) => {
        return this.coursesService.getCoursesList(props).pipe(
          map((coursesList: Course[]) =>
            CoursesActions.getCoursesListSuccess({
              list: coursesList,
            })
          )
        );
      })
    )
  );

  createCourse$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CoursesActions.createCourse),
        tap((course) => {
          return this.coursesService.createCourse(course).subscribe(() => {
            this.router.navigate(['/courses']);
          });
        })
      ),
    { dispatch: false }
  );

  updateCourse$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CoursesActions.updateCourse),
        tap((course) => {
          return this.coursesService.updateCourse(course).subscribe(() => {
            this.router.navigate(['/courses']);
          });
        })
      ),
    { dispatch: false }
  );

  getCourseById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.getCourseById),
      switchMap((props) => {
        return this.coursesService
          .getCourseById(props.id)
          .pipe(
            map((course: Course) => CoursesActions.getCourseByIdSuccess(course))
          );
      })
    )
  );
}
