import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IfAuthenticatedDirective } from './if-authenticated.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [IfAuthenticatedDirective],
  exports: [IfAuthenticatedDirective],
})
export class IfAuthenticatedModule {}
