import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { UsuarioComponent } from '../usuario/usuario.component';
import { EstablecimientoComponent } from '../establecimiento/establecimiento.component';
import { DashboardEstablecimientoComponent } from './dashboard-establecimiento/dashboard-establecimiento.component';
import { DashboardPerfilLocalComponent } from './dashboard-perfil-local/dashboard-perfil-local.component';

export const DashboardRoutes: Routes = [
  {
    path: '',

    component: DashboardComponent
  },

  {
    path: 'usuario',
    component: UsuarioComponent
  },

  {
    path: 'registrarEstablecimiento',
    component: EstablecimientoComponent
  },
  {
    path: 'carta',
    component: DashboardComponent
  },
  {
    path: 'establecimientos',
    component: DashboardEstablecimientoComponent
  },
  {
    path: 'me/establecimiento',
    component: DashboardPerfilLocalComponent
  }
 


];
