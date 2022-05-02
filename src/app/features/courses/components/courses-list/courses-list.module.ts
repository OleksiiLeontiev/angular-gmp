import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list.component';
import { CoursesItemModule } from './components/courses-item/courses-item.module';

@NgModule({
  declarations: [CoursesListComponent],
  exports: [CoursesListComponent],
  imports: [CommonModule, CoursesItemModule],
})
export class CoursesListModule {}
