import {Role} from "./role";

export class User {
  id: number = 0;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  token: string = '';
  password: string = '';
  role: Role;

  loginAttributes(){
    return {
      email: this.email,
      password: this.password
    };
  }
}
