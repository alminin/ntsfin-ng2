import { NgModule }            from '@angular/core';
import { RouterModule, Routes }        from '@angular/router';

import { PagesComponent }    from './pages.component';

const routes: Routes = [
  /*
  {
    path: 'login',
    loadChildren: () => System.import('./login/login.module')
  },
  {
    path: 'register',
    loadChildren: () => System.import('./register/register.module')
  },
  */
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', loadChildren: () => System.import('./dashboard/dashboard.module') }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }