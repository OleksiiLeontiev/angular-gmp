import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesEditComponent } from './courses-edit.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule, InputModule } from 'src/app/shared';

@NgModule({
  imports: [CommonModule, FormsModule, ButtonModule, InputModule],
  declarations: [CoursesEditComponent],
  exports: [CoursesEditComponent],
})
export class CoursesEditModule {}
