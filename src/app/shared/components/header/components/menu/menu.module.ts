import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { ButtonModule } from '../../../button';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, ButtonModule, TranslateModule],
  declarations: [MenuComponent],
  exports: [MenuComponent],
})
export class MenuModule {}
