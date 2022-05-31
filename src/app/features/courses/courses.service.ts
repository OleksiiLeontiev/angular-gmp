import { Injectable } from '@angular/core';
import { COURSES } from './mocks/mock-courses';
import { Course } from './models/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courses: Course[] = COURSES;

  constructor() {}

  getCoursesList(): Course[] {
    return this.courses;
  }
  createCourse(course: Course): void {
    this.courses.push(course);
  }
  getCourseById(id: number): Course | undefined {
    return this.courses.find((item) => item.id === id);
  }
  updateCourse(course: Course): void {
    const index = this.courses.findIndex((item) => item.id == course.id);

    if (index !== -1) {
      this.courses[index] = course;
    }
  }
  removeCourse(id: number) {
    console.log(this.courses.length);
    this.courses = this.courses.filter((item) => item.id !== id);
    console.log(this.courses.length, this.courses);
  }
}
