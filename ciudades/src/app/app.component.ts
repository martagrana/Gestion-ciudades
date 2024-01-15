import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { City } from 'src/model/city.model';
import { CityService } from 'src/services/city.service';
import { DialogoBorradoComponent } from './dialogo-borrado/dialogo-borrado.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


}
