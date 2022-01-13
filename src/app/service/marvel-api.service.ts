import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

    PUBLIC_KEY = '745cc8a5e29b4318d97a9d9c686d4d68';
    HASH_KEY = '2ccabe864903868840d16da7f0c77b4e';
    LIMIT_URL = 100;
    URL_API = `https://gateway.marvel.com:443/v1/public/comics?limit=${this.LIMIT_URL}&ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH_KEY}`;
    

  constructor(
    private httpClient: HttpClient
  ) { }

  get listComicsMarvel(): Observable<any>{
    return this.httpClient.get<any>(this.URL_API).pipe(
      map((data: any) => data)
    )
  }
}
