import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  fetchCountryData(id: string) {
    let api_url = 'https://api.worldbank.org/v2/country/' + id + '?format=json';
    return this.http.get(api_url);
  }

}
