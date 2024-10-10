import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',

    component: HomePage,

    children: [
      {
        path: 'administration',
        loadChildren: () => import('../administration/administration.module').then( m => m.AdministrationPageModule)
      },
      {
        path: 'reserva',
        loadChildren: () => import('../reserva/reserva.module').then( m => m.ReservaPageModule)
      },
      {
        path: 'user',
        loadChildren: () => import('../user/user.module').then( m => m.UserPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
