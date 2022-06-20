import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './router';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CoursesModule, LoginModule } from './features';
import { HeaderModule, FooterModule } from './shared';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CoursesModule,
    HeaderModule,
    FooterModule,
    LoginModule,
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
