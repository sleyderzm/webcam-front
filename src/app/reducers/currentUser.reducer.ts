import { Action } from '@ngrx/store';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const UNSET_CURRENT_USER = 'UNSET_CURRENT_USER';

import { User } from '../models/user';

export interface ActionWithPayload<T> extends Action {
  payload: T;
}

export interface Payload {
  value?: User;
}

export function currentUser(state: User = new User(), action: ActionWithPayload<Payload>) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.payload;
    case UNSET_CURRENT_USER:
      return new User();
    default:
      return state;
  }
}
