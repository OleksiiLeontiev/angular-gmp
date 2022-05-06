import { Component, OnInit } from '@angular/core';
import { COURSES } from './mocks/mock-courses';
import { Course } from './models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  public courses: Course[] = [];

  constructor() {}

  ngOnInit(): void {
    this.courses = COURSES;
  }
}
