import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { NavController } from '@ionic/angular';

export const autenticarGuard: CanActivateFn = (route, state) => {
  
  const navController = inject(NavController);
  const login = localStorage.getItem("Usuario") ? true : false;
  
  if(!login && state.url !== '/login'){
    navController.navigateRoot('/login');
    return false;
  }
  
  return true;
};
