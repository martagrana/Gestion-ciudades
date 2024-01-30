import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogoBorradoComponent } from './dialogo-borrado/dialogo-borrado.component';
import { ListadoCiudadesComponent } from './listado-ciudades/listado-ciudades.component';
import { EdicionCiudadComponent } from './edicion-ciudad/edicion-ciudad.component';
import { Route, RouterModule } from '@angular/router';
import { ListadoProvinciasComponent } from './listado-provincias/listado-provincias.component';
import { DialogoBorradoProvinciasComponent } from './dialogo-borrado-provincias/dialogo-borrado-provincias.component';
import { EdicionProvinciasComponent } from './edicion-provincias/edicion-provincias.component';
import { MatSelectModule } from '@angular/material/select';

// Configuracion de las rutas disponibles en la aplicacion
const routes: Route[] = [
  {
    path: 'provinces',
    component: ListadoProvinciasComponent
  }, {
    path: 'provinces/:idProvince',
    component: EdicionProvinciasComponent
  },
  {
    path: 'cities',
    component: ListadoCiudadesComponent
  }, {
    path: 'cities/new',
    component: EdicionCiudadComponent
  },
  {
    path: 'cities/:id',
    component: EdicionCiudadComponent
  }, {
    path: '',
    redirectTo: '/provinces', pathMatch: 'full'
  }
]



@NgModule({
  declarations: [
    AppComponent,
    DialogoBorradoComponent,
    ListadoCiudadesComponent,
    EdicionCiudadComponent,
    ListadoProvinciasComponent,
    DialogoBorradoProvinciasComponent,
    EdicionProvinciasComponent
  ],
  imports: [
    RouterModule.forRoot(routes), // Configuration del Router
    BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule, MatCardModule,
    MatDialogModule, MatButtonModule, MatIconModule, MatDividerModule, MatInputModule,
    MatFormFieldModule, BrowserAnimationsModule, MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
