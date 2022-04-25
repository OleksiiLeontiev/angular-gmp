import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesItemComponent } from './components/courses-item/courses-item.component';
import { LogoComponent } from './components/logo/logo.component';
import { MenuComponent } from './components/menu/menu.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    CoursesListComponent,
    CoursesItemComponent,
    LogoComponent,
    MenuComponent,
    SearchFormComponent,
    CoursesPageComponent,
  ],
  exports: [
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    CoursesPageComponent,
  ],
  imports: [CommonModule],
})
export class CoreModule {}
