import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../features';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { minHeader: true } },
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
