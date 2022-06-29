import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Breadcrumbs } from 'src/app/shared/models';
import { CoursesService } from '../../courses.service';

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
    this.createForm(courseId);
  }

  onSave() {
    if (this.operationType === 'edit') {
      this.coursesService
        .updateCourse(this.courseForm.value)
        .subscribe(() => this.router.navigate(['/courses']));
    } else {
      this.coursesService
        .createCourse(this.courseForm.value)
        .subscribe(() => this.router.navigate(['/courses']));
    }
  }

  createForm(courseId: number): void {
    if (courseId) {
      this.coursesService.getCourseById(+courseId).subscribe((course) => {
        const currentCourse = course;
        if (currentCourse) {
          this.operationType = 'edit';
          this.courseForm = this.fb.group({
            ...currentCourse,
            authors: [
              {
                id: '5b7a846290d6ff6894377fb5',
                name: 'Decker Albert',
              },
            ],
          });
          this.breadcrumbsData.push({
            title: this.courseForm.value.name,
          });
        }
      });
    } else {
      this.courseForm = this.fb.group({
        id: Date.now(),
        name: '',
        description: '',
        length: 60,
        date: '',
        isTopRated: false,
        authors: [
          {
            id: '5b7a846290d6ff6894377fb5',
            name: 'Decker Albert',
          },
        ],
      });
      this.breadcrumbsData.push({
        title: 'New course',
      });
    }
  }
}
