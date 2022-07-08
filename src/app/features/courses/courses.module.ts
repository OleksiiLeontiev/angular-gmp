import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursesRoutingModule } from './router';
import { LoaderModule } from 'src/app/shared';

@NgModule({
  imports: [CommonModule, CoursesRoutingModule, LoaderModule],
  declarations: [CoursesComponent],
  exports: [CoursesComponent],
})
export class CoursesModule {}
