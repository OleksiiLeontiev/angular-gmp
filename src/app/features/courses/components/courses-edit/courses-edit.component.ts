import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Breadcrumbs } from 'src/app/shared/models';
import { CoursesService } from '../../courses.service';
import { Course } from '../../models/course';

@Component({
  selector: 'app-courses-edit',
  templateUrl: './courses-edit.component.html',
  styleUrls: ['./courses-edit.component.scss'],
})
export class CoursesEditComponent {
  private operationType: 'edit' | 'create' = 'create';

  public breadcrumbsData: Breadcrumbs[] = [
    {
      title: 'Courses',
      link: '/courses',
    },
  ];

  get pageTitle(): string {
    return this.operationType === 'edit' ? 'Edit Course' : 'New Course';
  }

  public courseForm!: FormGroup;

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    const courseId = this.route.snapshot.params['id'];
    this.courseForm = this.createForm(courseId);
  }

  onSave() {
    if (this.operationType === 'edit') {
      this.coursesService.updateCourse(this.courseForm.value);
    } else {
      this.coursesService.createCourse(this.courseForm.value);
    }
    this.router.navigate(['/courses']);
  }

  createForm(courseId: number): FormGroup {
    let courseForm!: FormGroup;

    if (courseId) {
      const currentCourse = this.coursesService.getCourseById(+courseId);
      if (currentCourse) {
        this.operationType = 'edit';

        courseForm = this.fb.group({
          ...currentCourse,
          authors: '',
        });
      }
    } else {
      courseForm = this.fb.group({
        id: Date.now(),
        title: '',
        description: '',
        duration: 60,
        creationDate: '',
        topRated: false,
        authors: '',
      });
    }

    this.breadcrumbsData.push({
      title:
        this.operationType === 'edit'
          ? this.courseForm.value.title
          : 'New course',
    });

    return courseForm;
  }
}
