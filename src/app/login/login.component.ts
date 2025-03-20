import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service-auth/auth.service';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  selector: 'app-login',
  standalone: true, // Indica que es un componente independiente
  imports: [FormsModule], // Incluye FormsModule para habilitar [(ngModel)]
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    const success = this.authService.login(this.username, this.password);
    if (success) {
      this.router.navigate(['/admin']); // Redirige al panel de administración
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}

