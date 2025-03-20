import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true; // Permitir acceso si el usuario está autenticado
    } else {
      this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión si no está autenticado
      return false;
    }
  }
}

