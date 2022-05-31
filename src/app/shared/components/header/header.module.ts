import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { LogoModule, MenuModule } from './components';
import { BreadcrumbsModule } from '../breadcrumbs';

@NgModule({
  imports: [CommonModule, LogoModule, MenuModule, BreadcrumbsModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
