import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesItemComponent } from './courses-item.component';

@NgModule({
  declarations: [CoursesItemComponent],
  exports: [CoursesItemComponent],
  imports: [CommonModule],
})
export class CoursesItemModule {}
