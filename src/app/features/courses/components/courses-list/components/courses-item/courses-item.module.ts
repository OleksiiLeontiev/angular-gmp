import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesItemComponent } from './courses-item.component';
import { ButtonModule } from 'src/app/shared';

@NgModule({
  imports: [CommonModule, ButtonModule],
  declarations: [CoursesItemComponent],
  exports: [CoursesItemComponent],
})
export class CoursesItemModule {}
