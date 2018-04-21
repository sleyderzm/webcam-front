import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { LoadingComponent } from './components/loading/loading.component';

import { isLoading } from './reducers/loading.reducer';
import { currentUser } from './reducers/currentUser.reducer';

import { AuthGuard } from './guards/auth.guard';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    RoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      isLoading,
      currentUser
    })
  ],
  providers: [
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
