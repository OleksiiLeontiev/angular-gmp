import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesItemComponent } from './courses-item.component';
import { ButtonModule, TimeModule } from 'src/app/shared';
import { HighlightModule } from './directives';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    TimeModule,
    HighlightModule,
    TranslateModule,
  ],
  declarations: [CoursesItemComponent],
  exports: [CoursesItemComponent],
})
export class CoursesItemModule {}
