import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

import { Course } from './models/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private apiUrl = 'http://localhost:3004/courses';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getCoursesList(
    start: number = 0,
    count: number = 3,
    textFragment: string = ''
  ): Observable<Course[]> {
    return this.http
      .get<Course[]>(`${this.apiUrl}`, {
        ...this.httpOptions,
        params: {
          start,
          count,
          textFragment,
        },
      })
      .pipe(
        catchError(() =>
          throwError(
            () => new Error('getCoursesList failed. Please try again later.')
          )
        )
      );
  }
  createCourse(course: Course): Observable<Course> {
    return this.http
      .post<Course>(`${this.apiUrl}`, course, this.httpOptions)
      .pipe(
        catchError(() =>
          throwError(
            () => new Error('createCourse failed. Please try again later.')
          )
        )
      );
  }
  getCourseById(id: number): Observable<Course> {
    return this.http
      .get<Course>(`${this.apiUrl}/${id}`, this.httpOptions)
      .pipe(
        catchError(() =>
          throwError(
            () => new Error('getCourseById failed. Please try again later.')
          )
        )
      );
  }
  updateCourse(course: Course): Observable<Course> {
    return this.http
      .patch<Course>(`${this.apiUrl}/${course.id}`, course, this.httpOptions)
      .pipe(
        catchError(() =>
          throwError(
            () => new Error('updateCourse failed. Please try again later.')
          )
        )
      );
  }
  removeCourse(id: number): Observable<Course[]> {
    return this.http
      .delete<Course[]>(`${this.apiUrl}/${id}`, this.httpOptions)
      .pipe(
        catchError(() =>
          throwError(
            () => new Error('removeCourse failed. Please try again later.')
          )
        )
      );
  }
}
