import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Province } from 'src/model/province.model';
import { ProvinceService } from 'src/services/province.service';
import { DialogoBorradoProvinciasComponent } from '../dialogo-borrado-provincias/dialogo-borrado-provincias.component';

@Component({
  selector: 'app-listado-provincias',
  templateUrl: './listado-provincias.component.html',
  styleUrls: ['./listado-provincias.component.css']
})
export class ListadoProvinciasComponent implements OnInit {

  provincias: Province[] = [];

  constructor(private provinceService: ProvinceService, public dialogService: MatDialog) { }
  ngOnInit(): void {
    this.cargarProvincias();
  }

  /**
   * método para listar los registros de las provincias */
  cargarProvincias() {
    this.provinceService.query().subscribe((provinces: Province[]) => {
      console.log('provincias vienen desde el servidor', provinces);
      this.provincias = provinces;
    })
  }
  /** 
   * método para eliminar los registros según el id de la provincia 
   * @param id identificador de la provincia que quiero eliminar en el servidor*/
  borrarProvincia(id: string) {
    this.provinceService.delete(id).subscribe(() => {
      console.log("provincia borrada");
      this.cargarProvincias();
    })
  }

  /**
   * método para confirmar eliminar los registros según el id de la provincia
   * @param id identificador de la provincia que quiero eliminar en el servidor */
  confirmarBorrarProvincia(id: string) {
    const dialogRef = this.dialogService.open(DialogoBorradoProvinciasComponent);
    dialogRef.afterClosed().subscribe(resultado => {
      console.log(resultado);
      if (resultado) {
        this.borrarProvincia(id);
      }
    })
  }

}
