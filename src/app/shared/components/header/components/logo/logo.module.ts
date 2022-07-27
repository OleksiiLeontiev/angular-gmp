import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, RouterModule, TranslateModule],
  declarations: [LogoComponent],
  exports: [LogoComponent],
})
export class LogoModule {}
