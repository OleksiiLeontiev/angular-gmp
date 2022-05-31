import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';
import { COURSES } from './mocks/mock-courses';
import { Course } from './models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  // public courses: Course[] = [];
  public searchValue: string = '';

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    // this.courses = this.coursesService.getCoursesList();
  }

  getCourses() {
    return this.coursesService.getCoursesList();
  }

  onSearch(value: string) {
    this.searchValue = value;
  }
}
