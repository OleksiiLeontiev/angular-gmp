import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesItemComponent } from './courses-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CoursesItemComponent],
  exports: [CoursesItemComponent],
})
export class CoursesItemModule {}
