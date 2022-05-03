import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesSearchComponent } from './courses-search.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CoursesSearchComponent],
  exports: [CoursesSearchComponent],
})
export class CoursesSearchModule {}
