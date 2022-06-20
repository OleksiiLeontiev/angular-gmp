import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationInputComponent } from './duration-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputModule } from '../input';
import { TimeModule } from '../../pipes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputModule,
    TimeModule,
    ReactiveFormsModule,
  ],
  declarations: [DurationInputComponent],
  exports: [DurationInputComponent],
})
export class DurationInputModule {}
