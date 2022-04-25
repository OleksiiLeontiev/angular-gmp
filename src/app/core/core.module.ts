import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesItemComponent } from './courses-item/courses-item.component';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';

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
