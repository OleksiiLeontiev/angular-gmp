import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';

import { Observable, of } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { isPlatformServer } from '@angular/common';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { Course } from '../models/course';
import { CoursesService } from '../courses.service';

@Injectable()
export class CourseResolver implements Resolve<Course | null> {
  constructor(
    private coursesService: CoursesService,
    private transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Course | null> {
    const courseId = route.params['id'];

    const COURSE_KEY = makeStateKey<Course>('courseKey-' + courseId);

    if (this.transferState.hasKey(COURSE_KEY)) {
      const course = this.transferState.get(COURSE_KEY, null);

      this.transferState.remove(COURSE_KEY);

      return of(course);
    } else {
      return this.coursesService.getCourseById(courseId).pipe(
        first(),
        tap((course) => {
          if (isPlatformServer(this.platformId)) {
            this.transferState.set(COURSE_KEY, course);
          }
        })
      );
    }
  }
}
