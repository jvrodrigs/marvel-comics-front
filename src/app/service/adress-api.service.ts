import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdressApiService {

  URL_API = "https://nominatim.openstreetmap.org/reverse?"
  
  // https://nominatim.openstreetmap.org/reverse?lat=-3.7568592&lon=-38.621508&format=json
  constructor(private httpClient: HttpClient) { }

  getAddress(lat: number, lon: number): Observable<any>{
    const url = `${this.URL_API}lat=${lat}&lon=${lon}&format=json`;
    console.log(url);
    return this.httpClient.get<any>(url).pipe(data => data);
  }
}
