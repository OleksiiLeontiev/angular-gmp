import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursesSearchModule } from './components/courses-search/courses-search.module';
import { CoursesListModule } from './components/courses-list/courses-list.module';

@NgModule({
  declarations: [CoursesComponent],
  exports: [CoursesComponent],
  imports: [CommonModule, CoursesSearchModule, CoursesListModule],
})
export class CoursesModule {}
