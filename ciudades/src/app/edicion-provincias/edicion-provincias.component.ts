import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Province } from 'src/model/province.model';
import { ProvinceService } from 'src/services/province.service';

@Component({
  selector: 'app-edicion-provincias',
  templateUrl: './edicion-provincias.component.html',
  styleUrls: ['./edicion-provincias.component.css']
})
export class EdicionProvinciasComponent implements OnInit {
  [x: string]: any;

  provinciaSeleccionada: Province | null = null;

  formProvince: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  constructor(private provinceService: ProvinceService, private activatedRoute: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['idProvince'];
    this.provinceService.get(id).subscribe(({ value }) => {
      this.provinciaSeleccionada = value;
      this.formProvince.patchValue(value)
    })
  }

  /**
   * método para guardar los registros de las provincias */
  guardarOActualizarProvincia() {
    if (this.formProvince.valid) {
      const province = this.formProvince.value;
      const id = this.provinciaSeleccionada ? this.provinciaSeleccionada.$id : null;
      if (id) {
        // Si id existe y no es null o undefined, es una actualización
        this.provinceService.update(id, province).subscribe(() => {
          console.log("Datos editados");
          this.router.navigate(['provinces']);
        });

      } else {
        // Si id es null o undefined, es una creación
        this.provinceService.create(province).subscribe(() => {
          console.log("Datos guardados");
          this.router.navigate(['provinces']);
        });
      }
    }
  }

}
