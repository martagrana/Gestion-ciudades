import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from 'src/model/city.model';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClient: HttpClient) { }

  /* método para guardar los registros de las ciudades */
  create(city: City): Observable<City> {
    return this.httpClient.post<City>('https://capi-papi.azurewebsites.net/userapis/martatech/cities', city);
  }
  /* método para listar todos los registros de ciudades */
  query(): Observable<City[]> {
    return this.httpClient.get<City[]>('https://capi-papi.azurewebsites.net/userapis/martatech/cities');
  }
  /* método para actualizar los registros según el id de la ciudad */
  update(id: string, city: City): Observable<City> {
    return this.httpClient.put<City>(`https://capi-papi.azurewebsites.net/userapis/martatech/cities/${id}`, city);
  }
  /* método para eliminar los registros según el id de la ciudad */
  delete(id: string): Observable<City> {
    return this.httpClient.delete<City>(`https://capi-papi.azurewebsites.net/userapis/martatech/cities/${id}`);

  }

  /**
   * Obtiene una ciudad utilizando su identificador
   * @param id identificador de la ciudad que quiero cargar desde el servidor
   * @returns la ciudad si existe
   */
  get(id: string): Observable<City> {
    return this.httpClient.get<City>(`https://capi-papi.azurewebsites.net/userapis/martatech/cities/${id}`);
  }

}
