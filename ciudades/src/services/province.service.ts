import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Province } from 'src/model/province.model';

@Injectable({
    providedIn: 'root'
})
export class ProvinceService {

    readonly url: string = 'https://capi-papi.azurewebsites.net/userapis/martatech/provinces';
    constructor(private httpClient: HttpClient) { }

    /**
     * método para guardar los registros de las provincias 
     * @param province nombre de la provincia que quiero crear en el servidor
     * @returns la provincia */
    create(province: Province): Observable<Province> {
        return this.httpClient.post<Province>(this.url, province);
    }

    /**
      *método para listar todos los registros de provincias
      *@returns todas las provincias existentes desde el servidor */
    query(): Observable<Province[]> {
        return this.httpClient.get<Province[]>(this.url);
    }
    /** 
     * método para eliminar los registros según el id de la provincia
     * @param id identificador de la provincia que quiero eliminar en el servidor
     * @returns elimina la provincia */
    delete(id: string): Observable<Province> {
        return this.httpClient.delete<Province>(`${this.url}/${id}`);

    }
    /**
   * Obtiene una provincia utilizando su identificador
   * @param id identificador de la provincia que quiero cargar desde el servidor
   * @returns la provincia si existe
   */
    get(id: string): Observable<Province> {
        return this.httpClient.get<Province>(`${this.url}/${id}`);
    }

    /**
     *  método para actualizar los registros según el id de la ciudad
     * @param id identificador de la provincia que quiero editar
     * @param province nombre de la provincia que quiero editar
     * @returns la provincia actualizada */
    update(id: string, province: Province): Observable<Province> {
        return this.httpClient.put<Province>(`${this.url}/${id}`, province);
    }

}