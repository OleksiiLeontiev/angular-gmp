import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './notfound.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [NotfoundComponent],
  exports: [NotfoundComponent],
})
export class NotfoundModule {}
