import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list.component';
import { CoursesItemModule } from './components';

@NgModule({
  imports: [CommonModule, CoursesItemModule],
  declarations: [CoursesListComponent],
  exports: [CoursesListComponent],
})
export class CoursesListModule {}
