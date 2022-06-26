import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Breadcrumbs } from 'src/app/shared/models';
import { CoursesService } from '../../courses.service';
import { Course } from '../../models/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit, OnDestroy {
  public breadcrumbsData: Breadcrumbs[] = [
    {
      title: 'Courses',
    },
  ];

  public searchValue: string = '';
  public courses: Course[] = [];

  private loadMoreIndex: number = 3;
  private subs: Subscription[] = [];

  get coursesLength(): number {
    return this.courses.length;
  }

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.courses = this.getCourses();
  }

  async loadMoreClick() {
    this.subs.push(
      this.coursesService
        .getCoursesList(this.loadMoreIndex, 1, this.searchValue)
        .subscribe((data: Course[]) => {
          this.courses.push(...data);
          this.loadMoreIndex += 1;
        })
    );
  }

  deleteCourse(course: Course) {
    const deleteConfirm = confirm(`Delete ${course.name}?`);
    if (deleteConfirm) {
      this.subs.push(
        this.coursesService.removeCourse(course.id).subscribe(() => {
          this.courses = this.getCourses();
        })
      );
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
    const courses: Course[] = [];
    this.subs.push(
      this.coursesService
        .getCoursesList(0, 3, this.searchValue)
        .subscribe((data: Course[]) => {
          courses.push(...data);
        })
    );
    return courses;
  }

  onSearch(value: string) {
    this.searchValue = value;
    this.courses = this.getCourses();
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
