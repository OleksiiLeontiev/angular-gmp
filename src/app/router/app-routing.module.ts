import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../features';
import { NotfoundComponent } from '../shared';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { minHeader: true } },
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
