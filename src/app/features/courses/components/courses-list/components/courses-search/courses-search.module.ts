import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesSearchComponent } from './courses-search.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'src/app/shared';

@NgModule({
  imports: [CommonModule, FormsModule, ButtonModule],
  declarations: [CoursesSearchComponent],
  exports: [CoursesSearchComponent],
})
export class CoursesSearchModule {}
