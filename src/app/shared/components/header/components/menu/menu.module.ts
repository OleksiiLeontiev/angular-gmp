import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { ButtonModule } from '../../../button';
import { IfAuthenticatedModule } from 'src/app/core/directives';

@NgModule({
  imports: [CommonModule, ButtonModule, IfAuthenticatedModule],
  declarations: [MenuComponent],
  exports: [MenuComponent],
})
export class MenuModule {}
