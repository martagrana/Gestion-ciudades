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
  ciudadSeleccionada: City | null = null;

  constructor(private cityService: CityService) { }

  guardarCiudad() {
    const city = this.formCity.value;
    this.cityService.create(city).subscribe(() => {
      console.log("Datos guardados");
    });
  }

  cargarCiudades() {
    this.cityService.query().subscribe((cities: City[]) => {
      console.log('Ciudades que vienen desde el servidor', cities);
      this.ciudades = cities;
    })
  }

  borrarCiudad(id: string) {
    this.cityService.delete(id).subscribe(() => {
      console.log("ciudad borrada");
      this.cargarCiudades();
    });
  }

  editarCiudad(ciudad: City) {
    this.ciudadSeleccionada = ciudad;
    this.formCity.patchValue({
      name: ciudad.name,
      zipCode: ciudad.zipCode
    });
  }

}
