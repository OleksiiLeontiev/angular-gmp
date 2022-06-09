import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Course } from 'src/app/features/courses/models/course';

@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
}
