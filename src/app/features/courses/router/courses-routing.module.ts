import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards';
import { CoursesListComponent } from '../components';
import { CoursesEditComponent } from '../components/courses-edit';
import { CoursesComponent } from '../courses.component';

const coursesRoutes: Routes = [
  {
    path: 'courses',
    component: CoursesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          { path: 'new', component: CoursesEditComponent },
          { path: ':id', component: CoursesEditComponent },
          { path: '', component: CoursesListComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(coursesRoutes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
