import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesSearchComponent } from './courses-search.component';

@NgModule({
  declarations: [CoursesSearchComponent],
  exports: [CoursesSearchComponent],
  imports: [CommonModule],
})
export class CoursesSearchModule {}
