import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationInputComponent } from './duration-input.component';
import { FormsModule } from '@angular/forms';
import { InputModule } from '../input';

@NgModule({
  imports: [CommonModule, FormsModule, InputModule],
  declarations: [DurationInputComponent],
  exports: [DurationInputComponent],
})
export class DurationInputModule {}
