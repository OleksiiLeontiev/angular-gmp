import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationService } from './services';
import { IfAuthenticatedDirective, IfAuthenticatedModule } from './directives';

@NgModule({
  imports: [CommonModule, IfAuthenticatedModule],
  declarations: [],
  providers: [AuthorizationService],
  exports: [IfAuthenticatedDirective]
})
export class CoreModule {}
