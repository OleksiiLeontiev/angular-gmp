import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursesListModule, CoursesSearchModule } from './components';
import { ButtonModule } from 'src/app/shared';
import { FilterModule, OrderByModule } from './pipes';

@NgModule({
  imports: [
    CommonModule,
    CoursesSearchModule,
    CoursesListModule,
    ButtonModule,
    OrderByModule,
    FilterModule,
  ],
  declarations: [CoursesComponent],
  exports: [CoursesComponent],
})
export class CoursesModule {}
