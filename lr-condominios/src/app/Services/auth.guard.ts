import { inject, Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth';

export const authGuard: CanActivateFn = (route, state) => {
  if (inject(AuthService).isLogged) {
    return true;
  } else {
    inject(Router).navigate(['']);
    return false;
  }
};
