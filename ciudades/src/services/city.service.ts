import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from 'src/model/city.model';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClient: HttpClient) { }

  create(city: City): Observable<City> {
    return this.httpClient.post<City>('https://capi-papi.azurewebsites.net/userapis/martatech/cities', city);
  }

  query(): Observable<City[]> {
    return this.httpClient.get<City[]>('https://capi-papi.azurewebsites.net/userapis/martatech/cities');
  }

  update(id: string, city: City): Observable<City> {
    return this.httpClient.put<City>(`https://capi-papi.azurewebsites.net/userapis/martatech/cities/${id}`, city);
  }

  delete(id: string): Observable<City> {
    return this.httpClient.delete<City>(`https://capi-papi.azurewebsites.net/userapis/martatech/cities/${id}`);

  }

  saveOrUpdate(id: string, city: City): Observable<City> {
    if (city.$id) {
      return this.update(id, city);
    } else {
      return this.create(city);
    }
  }

}
