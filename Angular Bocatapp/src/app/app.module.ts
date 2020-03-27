import {
  AdminLayoutComponent,
  AuthLayoutComponent,
  HeaderComponent,
  LayoutComponent,
  MenuComponent,
  NotificationComponent,
  OptionsComponent,
  SidebarComponent
} from './core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatToolbarModule,
  MatDialog,
  MatDialogModule,
  MatInputModule,
  MatFormFieldControl
} from '@angular/material';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { BidiModule } from '@angular/cdk/bidi';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { NgModule } from '@angular/core';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { RouterModule } from '@angular/router';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { JwtModule } from "@auth0/angular-jwt";
import {MatGridListModule} from '@angular/material/grid-list';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { CrearProductoDialogComponent } from './crear-producto-dialog/crear-producto-dialog.component';
import { ProductoService } from './productoservice/producto.service';
import { LoginService } from './loginservice/login.service';
import { UsuariosService } from './services/usuarios.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BorrarProductoDialogComponent } from './borrar-producto-dialog/borrar-producto-dialog.component';
import { EstablecimientoService } from './establecimientoservice/establecimiento.service';
import { EditarEstablecimientoDialogComponent } from './editar-establecimiento-dialog/editar-establecimiento-dialog.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true,
  minScrollbarLength: 20
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    NotificationComponent,
    OptionsComponent,
    MenuComponent,
    AdminLayoutComponent,
    LayoutComponent,
    AuthLayoutComponent,
    CrearProductoDialogComponent,
    BorrarProductoDialogComponent,
    EditarEstablecimientoDialogComponent
  ],
  entryComponents: [
    CrearProductoDialogComponent,
    BorrarProductoDialogComponent,
    EditarEstablecimientoDialogComponent
  ],
  imports: [
    BrowserModule,
    JwtModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    LoadingBarRouterModule,
    MatSidenavModule,
    MatCardModule,
    MatMenuModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressBarModule,
    FlexLayoutModule,
    BidiModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOURAPIKEY'
    }),
    PerfectScrollbarModule,
    NgMaterialMultilevelMenuModule,
    MatGridListModule,
    FlexLayoutModule,
    AngularFileUploaderModule,
    JwtModule,
    

  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    ProductoService,
    LoginService,
    UsuariosService,
    EstablecimientoService,
    EstablecimientoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
