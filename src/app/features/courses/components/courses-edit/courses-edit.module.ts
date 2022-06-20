import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesEditComponent } from './courses-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  BreadcrumbsModule,
  ButtonModule,
  DurationInputModule,
  InputModule,
} from 'src/app/shared';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputModule,
    DurationInputModule,
    ReactiveFormsModule,
    BreadcrumbsModule,
  ],
  declarations: [CoursesEditComponent],
  exports: [CoursesEditComponent],
})
export class CoursesEditModule {}
