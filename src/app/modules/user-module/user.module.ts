import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {UserRoutingModule} from './user-routing.module';
import {HeaderComponent} from './layout/header/header.component';
import {NavbarComponent} from './layout/navbar/navbar.component';
import {SidebarComponent} from './layout/sidebar/sidebar.component';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers: [
  ]
})
export class UserModule { }
