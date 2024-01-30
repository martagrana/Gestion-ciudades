import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from 'src/model/city.model';
import { Province } from 'src/model/province.model';
import { CityService } from 'src/services/city.service';
import { ProvinceService } from 'src/services/province.service';

@Component({
  selector: 'app-edicion-ciudad',
  templateUrl: './edicion-ciudad.component.html',
  styleUrls: ['./edicion-ciudad.component.css']
})
export class EdicionCiudadComponent implements OnInit {
  [x: string]: any;
  ciudadSeleccionada: City | null = null;



  formCity: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]),
    provinceId: new FormControl('', [Validators.required])
  });

  constructor(private cityService: CityService, private provinceService: ProvinceService, private activatedRoute: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.cityService.get(id).subscribe(({ value }) => {
      this.ciudadSeleccionada = value;
      this.formCity.patchValue(value)
    })
    this.cargarProvincias();
  }

  /* esta parte es para poder hacer el dropdown */
  provincias: Province[] = [];

  cargarProvincias() {
    this.provinceService.query().subscribe((provinces: Province[]) => {
      console.log('provincias vienen desde el servidor', provinces);
      this.provincias = provinces;
    })
  }

  /** método para guardar los registros de las ciudades */
  guardarOActualizarCiudad() {
    if (this.formCity.valid) {
      const city = this.formCity.value;
      const id = this.ciudadSeleccionada ? this.ciudadSeleccionada.$id : null;
      if (id) {
        // Si id existe y no es null o undefined, es una actualización
        this.cityService.update(id, city).subscribe(() => {
          console.log("Datos editados");
          this.router.navigate(['cities']);
        });

      } else {
        // Si id es null o undefined, es una creación
        this.cityService.create(city).subscribe(() => {
          console.log("Datos guardados");
          this.router.navigate(['cities']);
        });
      }
    }
  }
}
