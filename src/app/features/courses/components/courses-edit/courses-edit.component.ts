import { Component, OnInit } from '@angular/core';
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

  public course: Course = {
    id: Date.now(),
    title: '',
    description: '',
    duration: 60,
    creationDate: '',
    topRated: false,
  };

  public authors: string = '';

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        const currentCourse = this.coursesService.getCourseById(+params['id']);
        if (currentCourse) this.course = currentCourse;
        this.operationType = 'edit';
      }
    });
  }

  onDurationChange($event: any) {
    this.course.duration = $event;
  }

  onSave() {
    if (this.operationType === 'edit') {
      this.coursesService.updateCourse(this.course);
    } else {
      this.coursesService.createCourse(this.course);
    }
    this.router.navigate(['/courses']);
  }
}
