import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Province } from 'src/model/province.model';

@Component({
  selector: 'app-listado-provincias',
  templateUrl: './listado-provincias.component.html',
  styleUrls: ['./listado-provincias.component.css']
})
export class ListadoProvinciasComponent {

  provincias: Province[] = [];



}
