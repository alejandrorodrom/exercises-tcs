import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./exercises/exercise-home.component').then((m) => m.ExerciseHomeComponent)
  },
  {
    path: 'templates/rxjs',
    loadComponent: () =>
      import('./templates/rxjs-mini/rxjs-mini-template.component').then(
        (m) => m.RxjsTemplateComponent
      )
  },
  {
    path: 'templates/directivas',
    loadComponent: () =>
      import('./templates/directivas-mini/directivas-mini-template.component').then(
        (m) => m.DirectivasTemplateComponent
      )
  },
  {
    path: 'templates/signals',
    loadComponent: () =>
      import('./templates/signals-mini/signals-mini-template.component').then(
        (m) => m.SignalsTemplateComponent
      )
  },
  {
    path: 'templates/forms',
    loadComponent: () =>
      import('./templates/forms/forms-template.component').then((m) => m.FormsTemplateComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
