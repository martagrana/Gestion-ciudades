import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from 'src/model/city.model';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  url: string = 'https://capi-papi.azurewebsites.net/userapis/martatech/cities';
  constructor(private httpClient: HttpClient) { }

  /* método para guardar los registros de las ciudades */
  create(city: City): Observable<City> {
    return this.httpClient.post<City>(this.url, city);
  }
  /* método para listar todos los registros de ciudades */
  query(): Observable<City[]> {
    return this.httpClient.get<City[]>(this.url);
  }
  /* método para actualizar los registros según el id de la ciudad */
  update(id: string, city: City): Observable<City> {
    return this.httpClient.put<City>(`${this.url}/${id}`, city);
  }
  /* método para eliminar los registros según el id de la ciudad */
  delete(id: string): Observable<City> {
    return this.httpClient.delete<City>(`${this.url}/${id}`);

  }

}
