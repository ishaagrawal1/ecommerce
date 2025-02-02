import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const loggedinGuard: CanActivateFn = () => {
  const router = inject(Router);
  const auth = localStorage.getItem('auth');
  const user = localStorage.getItem('user');
  if (!auth || !user) {
    router.navigateByUrl('/login');
    return false;
  }
  return true;
};
