import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable()
export class AuthGuard implements CanActivate {

  currentUser: Observable<User>;

  activated: boolean = false;

  constructor(private router: Router,
              private store: Store<any>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.currentUser = this.store.select('currentUser');
    this.currentUser.subscribe(
      currentUser => {
        if (currentUser && currentUser.id) {
          this.activated = true;
        } else {
          this.activated = false;
        }
      }
    );

    // not logged in so redirect to login page with the return url
    if(this.activated){
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
