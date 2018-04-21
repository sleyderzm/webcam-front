import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '../../guards/auth.guard';
import {MainComponent} from './main/main.component';
const routes: Routes = [
  { path: '', component: MainComponent, canActivate: [AuthGuard],
    children: [
      /*{ path: '', redirectTo: 'subscribers', pathMatch: 'full' },*/
    ]},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
