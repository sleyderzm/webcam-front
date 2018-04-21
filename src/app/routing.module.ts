import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import {LoginComponent} from "./modules/public-module/login/login.component";

const routes: Routes = [
  {path: '', loadChildren: 'app/modules/public-module/public.module#PublicModule'},
  { path: 'main', loadChildren: 'app/modules/user-module/user.module#UserModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [ RouterModule ]
})

export class RoutingModule {}


