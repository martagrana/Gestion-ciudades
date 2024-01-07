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

  /* método para guardar los registros de las ciudades */
  guardarOActualizarCiudad() {
    const city = this.formCity.value;
    const id = this.ciudadSeleccionada ? this.ciudadSeleccionada.$id : null;
    if (id) {
      // Si id existe y no es null o undefined, es una actualización
      this.cityService.update(id, city).subscribe(() => {
        console.log("Datos editados");
        this.cargarCiudades();
        this.formCity.reset();
        this.ciudadSeleccionada = null;
      });

    } else {
      // Si id es null o undefined, es una creación
      this.cityService.create(city).subscribe(() => {
        console.log("Datos guardados");
        this.cargarCiudades();
        this.formCity.reset();
      });
    }
  }
  /* método para listar todos los registros de ciudades */
  cargarCiudades() {
    this.cityService.query().subscribe((cities: City[]) => {
      console.log('Ciudades que vienen desde el servidor', cities);
      this.ciudades = cities;
    })
  }
  /* método para confirmar eliminar los registros según el id de la ciudad */
  confirmarBorrarCiudad(id: string) {
    let confirmacion = confirm("¿Deseas eliminar esta ciudad?");
    if (confirmacion) {
      // Si el usuario hace clic en "Aceptar", procede con el borrado
      this.borrarCiudad(id);
    }
  }

  /* método para eliminar los registros según el id de la ciudad */
  borrarCiudad(id: string) {
    this.cityService.delete(id).subscribe(() => {
      console.log("ciudad borrada");
      this.cargarCiudades();
    });
  }
  /* método para poder editar los registros según el id de la ciudad */
  editarCiudad(ciudad: City) {
    this.ciudadSeleccionada = ciudad;
    this.formCity.patchValue({
      name: ciudad.name,
      zipCode: ciudad.zipCode
    });
  }

}
