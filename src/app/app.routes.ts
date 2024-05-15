import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('@lms/client').then((m) => m.routes),
  },
  {
    path: 'auth',
    loadChildren: () => import('@lms/auth').then((m) => m.routes),
  },
  {
    path: 'admin',
    loadChildren: () => import('@lms/admin').then((m) => m.routes),
  },
];
