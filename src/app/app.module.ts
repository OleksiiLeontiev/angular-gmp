import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './router';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CoursesModule, LoginModule } from './features';
import { HeaderModule, FooterModule, NotfoundModule } from './shared';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    CoursesModule,
    HeaderModule,
    FooterModule,
    LoginModule,
    NotfoundModule,
    AppRoutingModule,
    NgSelectModule,
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
