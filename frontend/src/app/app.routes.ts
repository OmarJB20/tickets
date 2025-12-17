import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { ClienteListComponent } from './clientes/cliente-list/cliente-list.component';
import { RegistroComponent } from './pages/registro/registro.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },

  // Clientes
  { path: 'clientes', component: ClienteListComponent },
  { path: 'registro', component: RegistroComponent  },

  { path: '**', redirectTo: 'login' }
];
