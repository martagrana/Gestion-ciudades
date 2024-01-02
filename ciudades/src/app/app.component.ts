import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { City } from 'src/model/city.model';
import { CityService } from 'src/services/city.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'ciudades';

  formCity: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [Validators.required, Validators.maxLength(5), Validators.minLength(5)])
  });

  ciudades: City[] = [];

  constructor(private cityService: CityService) { }

  guardarNombreCiudad() {
    const city = this.formCity.value;
    this.cityService.create(city).subscribe(() => {
      console.log("Datos guardados")
    });
  }

  cargarCiudades() {
    this.cityService.query().subscribe((cities: City[]) => {
      console.log('Ciudades que vienen desde el servidor', cities)
      this.ciudades = cities;
    })
  }

  borrarCiudad(id: string) {

    this.cityService.delete(id).subscribe(() => {
      console.log("ciudad borrada")
      this.cargarCiudades();
    });
  }

  /* mostrarFormularioEdicion: boolean = false;
 
   cargarDatosEdicion(ciudad: City) {
     this.mostrarFormularioEdicion = true;
     this.formEdit.setValue({
       id: ciudad.id,
       name: ciudad.name,
       zipCode: ciudad.zipCode
     });
   }
 
   guardarEdicion() {
     const editedCity = this.formEdit.value;
     this.cityService.update(editedCity).subscribe(() => {
       console.log('Ciudad actualizada');
       this.mostrarFormularioEdicion = false;
       this.cargarCiudades();
     });
   }*/

}
