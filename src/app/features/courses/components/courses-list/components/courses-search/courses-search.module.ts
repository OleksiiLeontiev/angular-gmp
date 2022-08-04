import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesSearchComponent } from './courses-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule, InputModule } from 'src/app/shared';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  declarations: [CoursesSearchComponent],
  exports: [CoursesSearchComponent],
})
export class CoursesSearchModule {}
