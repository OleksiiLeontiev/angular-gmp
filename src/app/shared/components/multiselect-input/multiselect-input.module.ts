import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiselectInputComponent } from './multiselect-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { InputModule } from '../input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputModule,
    ReactiveFormsModule,
    NgSelectModule,
  ],
  declarations: [MultiselectInputComponent],
  exports: [MultiselectInputComponent],
})
export class MultiselectInputModule {}
