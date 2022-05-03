import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursesListModule, CoursesSearchModule } from './components';

@NgModule({
  imports: [CommonModule, CoursesSearchModule, CoursesListModule],
  declarations: [CoursesComponent],
  exports: [CoursesComponent],
})
export class CoursesModule {}
