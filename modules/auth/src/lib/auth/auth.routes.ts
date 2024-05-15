import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./auth.component'),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'sign-in' },
      {
        path: 'sign-in',
        loadComponent: () => import('./sign-in/sign-in.component'),
      },
      {
        path: 'sign-up',
        loadComponent: () => import('./sign-up/sign-up.component'),
      },
    ],
  },
];
