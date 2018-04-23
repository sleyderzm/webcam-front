import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {UserRoutingModule} from './user-routing.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers: [
  ]
})
export class UserModule { }
