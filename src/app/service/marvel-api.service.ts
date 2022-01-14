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
    LIMIT_URL = 24;
    URL_API = "https://gateway.marvel.com:443/v1/public/comics";
    

  constructor(
    private httpClient: HttpClient
  ) { }

  listComicsMarvel(): Observable<any>{
    const url = `${this.URL_API}?limit=${this.LIMIT_URL}&ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH_KEY}`
    return this.httpClient.get<any>(url).pipe(
      map((data: any) => data)
    )
  }

  loadMoreMarvel(limit?: number): Observable<any>{
    let countLimit = limit ? limit : this.LIMIT_URL;
    const url = `${this.URL_API}?limit=${countLimit}&offset=${countLimit =+ countLimit}&ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH_KEY}`
    return this.httpClient.get<any>(url).pipe(
      map((data: any) => data)
    )
  }

  readByIdComicsMarvel(id: string): Observable<any>{
    this.URL_API = `https://gateway.marvel.com:443/v1/public/comics/${id}?limit=${this.LIMIT_URL}&ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH_KEY}`;
    return this.httpClient.get<any>(this.URL_API).pipe(map((data: any) => data));
  } 
}
