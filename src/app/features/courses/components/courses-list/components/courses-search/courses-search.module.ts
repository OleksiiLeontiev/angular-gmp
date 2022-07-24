import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesSearchComponent } from './courses-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule, InputModule } from 'src/app/shared';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputModule,
    ReactiveFormsModule,
  ],
  declarations: [CoursesSearchComponent],
  exports: [CoursesSearchComponent],
})
export class CoursesSearchModule {}
