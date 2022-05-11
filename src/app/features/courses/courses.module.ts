import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursesListModule, CoursesSearchModule } from './components';
import { ButtonModule } from 'src/app/shared';

@NgModule({
  imports: [CommonModule, CoursesSearchModule, CoursesListModule, ButtonModule],
  declarations: [CoursesComponent],
  exports: [CoursesComponent],
})
export class CoursesModule {}
