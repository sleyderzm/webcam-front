import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { GlobalVariable } from '../app.global';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Store } from '@ngrx/store';
import { SET_CURRENT_USER } from '../reducers/currentUser.reducer';

import 'rxjs/add/operator/map';

import { IS_LOADING } from '../reducers/loading.reducer';
import {Router} from "@angular/router";

@Injectable()
export class UserService {

  currentUser: Observable<User>;
  currentUserToken: string = '';

  constructor(
    private http: HttpClient,
    private store:Store<any>,
    private router: Router
  ) {
    this.currentUser = this.store.select('currentUser');
    this.currentUser.subscribe(
      user => {
        this.currentUserToken = user.token;
      }
    );
  }

  login(data: User) {

    this.store.dispatch({ type: IS_LOADING, payload: true });

    var headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    );

    return this.http.post(
      GlobalVariable.BASE_API_URL + 'login',
      data.loginAttributes(),
      { headers: headers }
    ).subscribe(
      response => {
        // login successful if there's a jwt token in the response
        let user = Object.assign(new User(), response.user);
        if (user && user.id) {
          user.token = response.token;
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.store.dispatch({type: SET_CURRENT_USER, payload: user});
          this.router.navigate(["/main"]);
        }

        this.store.dispatch({ type: IS_LOADING, payload: false });
      },
      error => {
        this.store.dispatch({ type: IS_LOADING, payload: false });
      }
    );
  }

  getCurrentUserToken(){
    return this.currentUserToken;
  }
}
