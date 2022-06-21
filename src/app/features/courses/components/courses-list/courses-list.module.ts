import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list.component';
import { CoursesItemModule } from './components';
import { BreadcrumbsModule, ButtonModule } from 'src/app/shared';
import { OrderByModule, FilterModule } from '../../pipes';
import { CoursesSearchModule } from './components/courses-search';

@NgModule({
  imports: [
    CommonModule,
    CoursesItemModule,
    CoursesSearchModule,
    ButtonModule,
    OrderByModule,
    FilterModule,
    BreadcrumbsModule,
  ],
  declarations: [CoursesListComponent],
  exports: [CoursesListComponent],
})
export class CoursesListModule {}
