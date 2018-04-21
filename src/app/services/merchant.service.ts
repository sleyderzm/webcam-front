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
import {Merchant} from '../models/merchant';

@Injectable()
export class MerchantService {

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

  create (data: Merchant) {
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    );

    return this.http.post(
      GlobalVariable.BASE_API_URL + 'login', data,{ headers: headers })
  }
}
