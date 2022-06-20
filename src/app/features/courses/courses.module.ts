import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursesRoutingModule } from './router';

@NgModule({
  imports: [CommonModule, CoursesRoutingModule],
  declarations: [CoursesComponent],
  exports: [CoursesComponent],
})
export class CoursesModule {}
