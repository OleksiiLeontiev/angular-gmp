import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationService } from './services';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [AuthorizationService],
  exports: [],
})
export class CoreModule {}
