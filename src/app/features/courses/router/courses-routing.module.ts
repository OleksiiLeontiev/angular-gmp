import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards';
import { CoursesListComponent } from '../components';
import { CoursesEditComponent } from '../components/courses-edit';
import { CoursesComponent } from '../courses.component';
import { CourseResolver } from './course.resolver';

const coursesRoutes: Routes = [
  {
    path: 'courses',
    component: CoursesComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'new', component: CoursesEditComponent },
          {
            path: ':id',
            component: CoursesEditComponent,
            resolve: {
              course: CourseResolver,
            },
          },
          {
            path: '',
            component: CoursesListComponent,
            canActivate: [AuthGuard],
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(coursesRoutes)],
  providers: [CourseResolver],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
