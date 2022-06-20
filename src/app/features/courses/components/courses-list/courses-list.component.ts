import { Component, OnInit } from '@angular/core';
import { Breadcrumbs } from 'src/app/shared/models';
import { CoursesService } from '../../courses.service';
import { Course } from '../../models/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  public breadcrumbsData: Breadcrumbs[] = [
    {
      title: 'Courses',
    },
  ];

  public searchValue: string = '';

  get coursesLength(): number {
    return this.getCourses().length;
  }

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {}

  loadMoreClick() {
    console.log('Load more');
  }

  deleteCourse(course: Course) {
    const deleteConfirm = confirm(`Delete ${course.title}?`);
    if (deleteConfirm) {
      this.coursesService.removeCourse(course.id);
      console.log(`delete id=${course.id}`);
    }
  }

  editCourse(course: Course) {
    this.coursesService.updateCourse(course);
    console.log(`edit id=${course.id}`);
  }

  identify(index: number, item: any): string {
    return item.id;
  }

  getCourses() {
    return this.coursesService.getCoursesList();
  }

  onSearch(value: string) {
    this.searchValue = value;
  }
}
