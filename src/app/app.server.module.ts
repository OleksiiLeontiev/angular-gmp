import { NgModule } from '@angular/core';
import {
  ServerModule,
  ServerTransferStateModule,
} from '@angular/platform-server';
import {
  UniversalModule,
  UNIVERSAL_LOCAL_STORAGE,
} from '@ng-web-apis/universal';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    UniversalModule,
  ],
  bootstrap: [AppComponent],
  providers: [UNIVERSAL_LOCAL_STORAGE],
})
export class AppServerModule {}
