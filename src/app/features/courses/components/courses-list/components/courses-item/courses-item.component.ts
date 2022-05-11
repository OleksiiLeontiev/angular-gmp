import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/features/courses/models/course';

@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.scss'],
})
export class CoursesItemComponent implements OnInit {
  @Input()
  public course!: Course;

  @Output()
  deleteEvent = new EventEmitter();

  @Output()
  editEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  deleteClick() {
    this.deleteEvent.emit();
  }

  editClick() {
    this.editEvent.emit();
  }

  getFormattedDuration(duration: number): string {
    const hoursString = duration > 59 ? `${Math.floor(duration / 60)}h ` : '';
    const minutesString = duration % 60 ? `${duration % 60}min` : '';
    return `${hoursString}${minutesString}`;
  }
}
