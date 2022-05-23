import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursesListModule, CoursesSearchModule } from './components';
import { ButtonModule } from 'src/app/shared';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  imports: [CommonModule, CoursesSearchModule, CoursesListModule, ButtonModule],
  declarations: [CoursesComponent, OrderByPipe, FilterPipe],
  exports: [CoursesComponent],
})
export class CoursesModule {}
