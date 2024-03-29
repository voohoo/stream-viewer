import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NeedAuthGuard } from './auth.guard';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [NeedAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [NeedAuthGuard]
})
export class AppRoutingModule { }
