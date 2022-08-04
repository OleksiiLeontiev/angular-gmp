import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { ButtonModule } from '../../../button';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ButtonModule, TranslateModule, FormsModule],
  declarations: [MenuComponent],
  exports: [MenuComponent],
})
export class MenuModule {}
