import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatTableModule,
  MatProgressBarModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatInputModule,
  MatOptionModule ,
  MatSelectModule
} from '@angular/material';

import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { UsuarioComponent } from '../usuario/usuario.component';
import { EstablecimientoComponent } from '../establecimiento/establecimiento.component';
import { DashboardEstablecimientoComponent } from './dashboard-establecimiento/dashboard-establecimiento.component';
import { DashboardPerfilLocalComponent } from './dashboard-perfil-local/dashboard-perfil-local.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatProgressBarModule,
    MatMenuModule,
    ChartsModule,
    NgxDatatableModule,
    FlexLayoutModule,
    MatGridListModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule
  ],
  declarations: [DashboardComponent, UsuarioComponent, EstablecimientoComponent,DashboardEstablecimientoComponent, DashboardPerfilLocalComponent]
})
export class DashboardModule {}
