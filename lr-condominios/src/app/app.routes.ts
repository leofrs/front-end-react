import { Routes } from '@angular/router';

import { ContentComponent } from './content/content.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from './Services/auth.guard';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'content',
    component: ContentComponent,
    canActivate: [authGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
