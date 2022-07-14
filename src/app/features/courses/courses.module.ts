import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursesRoutingModule } from './router';
import { LoaderModule } from 'src/app/shared';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoursesEffects, coursesReducer } from './store';
import {
  AuthorizationEffects,
  authorizationReducer,
} from 'src/app/core/state/authorization';

@NgModule({
  imports: [
    CommonModule,
    CoursesRoutingModule,
    LoaderModule,
    EffectsModule.forRoot([CoursesEffects, AuthorizationEffects]),
    StoreModule.forRoot({
      auth: authorizationReducer,
      courses: coursesReducer,
    }),
  ],
  declarations: [CoursesComponent],
  exports: [CoursesComponent],
})
export class CoursesModule {}
