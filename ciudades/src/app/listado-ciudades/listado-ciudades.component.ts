import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { City } from 'src/model/city.model';
import { CityService } from 'src/services/city.service';
import { DialogoBorradoComponent } from '../dialogo-borrado/dialogo-borrado.component';

@Component({
  selector: 'app-listado-ciudades',
  templateUrl: './listado-ciudades.component.html',
  styleUrls: ['./listado-ciudades.component.css']
})
export class ListadoCiudadesComponent implements OnInit {
  ciudades: City[] = [];
  router: any;
  formCity: any;

  constructor(private cityService: CityService, public dialogService: MatDialog) { }
  ngOnInit(): void {
    this.cargarCiudades();
  }

  /** 
   * método para listar todos los registros de ciudades
    */
  cargarCiudades() {
    this.cityService.query().subscribe((cities: City[]) => {
      console.log('Ciudades que vienen desde el servidor', cities);
      this.ciudades = cities;
    })
  }
  /**
   * metodo para guardar una nueva ciudad
   * 
   */
  crearCiudad() {

  }

  /** 
   *  método para eliminar los registros según el id de la ciudad
   * @param id identificador de la ciudad que se desea eliminar */

  borrarCiudad(id: string) {
    this.cityService.delete(id).subscribe(() => {
      console.log("ciudad borrada");
      this.cargarCiudades();
    });
  }

  /** 
   * método para confirmar eliminar los registros según el id de la ciudad 
   * @param id identificador de la ciudad que se desea eliminar*/

  confirmarBorrarCiudad(id: string) {
    const dialogRef = this.dialogService.open(DialogoBorradoComponent);
    dialogRef.afterClosed().subscribe(resultado => {
      console.log(resultado);
      if (resultado) {
        this.borrarCiudad(id);
      }
    })
  }
}
