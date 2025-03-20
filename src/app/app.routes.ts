import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BeneficiosComponent } from './pages/beneficios/beneficios.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { TalleresComponent } from './pages/talleres/talleres.component';
import { ViajesComponent } from './pages/viajes/viajes.component';
import { AfiliarseComponent } from './pages/afiliarse/afiliarse.component';
import { OpticasComponent } from './pages/opticas/opticas.component';
import { FarmaciasComponent } from './pages/farmacias/farmacias.component';
import { NewsFormComponent } from './admin/news-form/news-form.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './service-auth/auth.guard';
import { LoginComponent } from './login/login.component';



export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' }, // Ruta para la página principal
    { path: 'beneficios', component: BeneficiosComponent },
    { path: 'contacto', component: ContactoComponent},
    { path: 'noticias', component: NoticiasComponent},
    { path: 'talleres', component: TalleresComponent},
    { path: 'viajes', component: ViajesComponent },
    { path: 'afiliarse', component: AfiliarseComponent},
    { path: 'opticas', component: OpticasComponent},
    {path: 'farmacias', component: FarmaciasComponent},
    {path: 'admin/news-form', component: NewsFormComponent},

    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }, // Ruta protegida
    { path: 'login', component: LoginComponent }, // Ruta pública para iniciar sesión
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirigir al inicio de sesión por defecto

    { path: 'login', component: LoginComponent },


    { path: '**', redirectTo: '', pathMatch: 'full' } // Ruta de error 404
    // Agregar más rutas para otras páginas
  ];

