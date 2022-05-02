import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsModule } from './components/breadcrumbs/breadcrumbs.module';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HeaderModule, FooterModule, BreadcrumbsModule],
  exports: [HeaderModule, FooterModule, BreadcrumbsModule],
})
export class SharedModule {}
