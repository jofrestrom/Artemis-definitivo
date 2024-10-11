import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservaPage } from './reserva.page';

const routes: Routes = [
  {
    path: '',
    component: ReservaPage,
    children: [
      {
        path: 'administration',
        loadChildren: () => import('../administration/administration.module').then( m => m.AdministrationPageModule)
      },
      {
        path: 'user',
        loadChildren: () => import('../user/user.module').then( m => m.UserPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservaPageRoutingModule {}
