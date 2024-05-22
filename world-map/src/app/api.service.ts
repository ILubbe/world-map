import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }
  country = {};
  fetchCountryData(id: string) {
    let api_url = 'https://api.worldbank.org/v2/country/' + id + '?format=json';
    return this.http.get(api_url);
  }

  setCountryData(id: string) {
    let subject = new Subject();

    this.fetchCountryData(id).subscribe((data: any) => {
      subject.next({
        name: data[1][0].name,
        capitalCity: data[1][0].capitalCity,
        region: data[1][0].region.value,
        incomeLevel: data[1][0].incomeLevel.value,
        iso2Code: data[1][0].iso2Code,
        latitude: data[1][0].latitude,
        longitude: data[1][0].longitude
      })
    })
    return subject.asObservable();
  }

}
