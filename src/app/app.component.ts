import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from './models/user';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { SET_CURRENT_USER } from './reducers/currentUser.reducer';
import { GlobalVariable } from './app.global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  currentUser: Observable<User>;
  subscribers: any = {};

  constructor(private store: Store<any>,
              private router: Router) {
    this.currentUser = store.select('currentUser');
    let user = Object.assign(new User(), JSON.parse(localStorage.getItem('currentUser')));
    if (user && user.id && user.token && user.token != '' && user.id != 0) {
      this.store.dispatch({type: SET_CURRENT_USER, payload: user});
    }
  }

  ngOnInit() {
  }

  ngOnDestroy() {

  }

}
