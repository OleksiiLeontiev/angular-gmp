import { Component, OnInit } from '@angular/core';
import { COURSES } from './mocks/mock-courses';
import { Course } from './models/course';
import { FilterPipe } from './pipes/filter.pipe';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  public courses: Course[] = [];
  public searchValue: string = '';
  private filter = new FilterPipe();

  constructor() {}

  ngOnInit(): void {
    this.courses = COURSES;
  }

  searchClick($event: any) {
    this.courses = this.filter.transform(COURSES, $event);
  }
}
