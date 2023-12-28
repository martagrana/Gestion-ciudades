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
    return this.httpClient.post<City>('http://192.168.244.131:3000/userapis/martatech/cities', city);
  }

  query(): Observable<City[]> {
    return this.httpClient.get<City[]>('http://192.168.244.131:3000/userapis/martatech/cities');
  }
}
