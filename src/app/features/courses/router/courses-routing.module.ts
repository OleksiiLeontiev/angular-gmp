import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from '../components';
import { CoursesEditComponent } from '../components/courses-edit';
import { CoursesComponent } from '../courses.component';

const coursesRoutes: Routes = [
  {
    path: 'courses',
    component: CoursesComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'add', component: CoursesEditComponent },
          { path: 'edit/:id', component: CoursesEditComponent },
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
