import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesItemComponent } from './courses-item.component';
import { ButtonModule, TimePipe } from 'src/app/shared';
import { HighlightDirective } from './directives';

@NgModule({
  imports: [CommonModule, ButtonModule],
  declarations: [CoursesItemComponent, HighlightDirective, TimePipe],
  exports: [CoursesItemComponent],
})
export class CoursesItemModule {}
