import { Injectable } from '@angular/core';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  user: User[] = [new User(1, 'flor@imperador.com', 'lourenco193')];
}
