import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../courses.service';
import { Course } from '../../models/course';

@Component({
  selector: 'app-courses-edit',
  templateUrl: './courses-edit.component.html',
  styleUrls: ['./courses-edit.component.scss'],
})
export class CoursesEditComponent implements OnInit {
  private operationType: 'edit' | 'create' = 'create';

  get pageTitle(): string {
    return this.operationType === 'edit' ? 'Edit Course' : 'New Course';
  }

  public courseForm: FormGroup = this.fb.group({
    id: Date.now(),
    title: '',
    description: '',
    duration: 60,
    creationDate: '',
    topRated: false,
    authors: '',
  });

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    const courseId = this.route.snapshot.params['id'];

    if (courseId) {
      const currentCourse = this.coursesService.getCourseById(+courseId);
      if (currentCourse)
        this.courseForm.setValue({
          ...currentCourse,
          authors: '',
        });
      this.operationType = 'edit';
    }
  }

  ngOnInit(): void {}

  onSave() {
    if (this.operationType === 'edit') {
      this.coursesService.updateCourse(this.courseForm.value);
    } else {
      this.coursesService.createCourse(this.courseForm.value);
    }
    this.router.navigate(['/courses']);
  }
}
