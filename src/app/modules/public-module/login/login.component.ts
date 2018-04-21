import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../../models/user';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';

import { UNSET_CURRENT_USER } from '../../../reducers/currentUser.reducer';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {

  model: User = new User();

  constructor(
    private store: Store<any>,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.store.dispatch({ type: UNSET_CURRENT_USER });
  }

  login(){
    this.userService.login(this.model);
  }
}
