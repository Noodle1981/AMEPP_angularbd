import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false; // Bandera para verificar el estado de autenticación
  private token: string | null = null; // Token para autenticación

  constructor() {}

  login(username: string, password: string): boolean {
    // Validar las credenciales (puedes reemplazar esta lógica por una llamada al backend)
    if (username === 'admin' && password === '1234') {
      this.isAuthenticated = true;
      this.token = 'dummy-token'; // Aquí simulas un token
      localStorage.setItem('token', this.token); // Guarda el token localmente
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.token = null;
    localStorage.removeItem('token'); // Borra el token del almacenamiento local
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated || !!localStorage.getItem('token'); // Verifica autenticación
  }
}
