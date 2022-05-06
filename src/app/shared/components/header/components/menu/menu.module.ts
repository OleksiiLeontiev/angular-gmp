import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { ButtonModule } from '../../../button';

@NgModule({
  imports: [CommonModule, ButtonModule],
  declarations: [MenuComponent],
  exports: [MenuComponent],
})
export class MenuModule {}
