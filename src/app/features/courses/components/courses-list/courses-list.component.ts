import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../../models/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  @Input()
  public courses: Course[] = [];

  constructor() {}

  ngOnInit(): void {}

  loadMoreClick() {
    console.log('Load more');
  }

  deleteCourse(course: Course) {
    console.log(`delete id=${course.id}`);
  }

  editCourse(course: Course) {
    console.log(`edit id=${course.id}`);
  }

  identify(index: number, item: any): string {
    return item.id;
  }
}
