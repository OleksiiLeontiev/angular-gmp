import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateInputComponent } from './date-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputModule } from '../input';

@NgModule({
  imports: [CommonModule, FormsModule, InputModule, ReactiveFormsModule],
  declarations: [DateInputComponent],
  exports: [DateInputComponent],
})
export class DateInputModule {}
