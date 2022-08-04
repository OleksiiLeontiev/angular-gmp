import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesEditComponent } from './courses-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  BreadcrumbsModule,
  ButtonModule,
  DateInputModule,
  DurationInputModule,
  InputModule,
  MultiselectInputModule,
} from 'src/app/shared';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputModule,
    DurationInputModule,
    DateInputModule,
    ReactiveFormsModule,
    BreadcrumbsModule,
    MultiselectInputModule,
    TranslateModule,
  ],
  declarations: [CoursesEditComponent],
  exports: [CoursesEditComponent],
})
export class CoursesEditModule {}
