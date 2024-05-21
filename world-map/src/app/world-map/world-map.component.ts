import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-world-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.css'
})

export class WorldMapComponent {
  country: any = {};

  constructor (private apiService: ApiService) {}

  setCountryData(event: any) {
    this.apiService.fetchCountryData(event.target.getAttribute('id')).subscribe((data: any) => {
      this.country = {
        name: data[1][0].name,
        capitalCity: data[1][0].capitalCity,
        region: data[1][0].region.value,
        incomeLevel: data[1][0].incomeLevel.value,
        iso2Code: data[1][0].iso2Code,
        latitude: data[1][0].latitude,
        longitude: data[1][0].longitude
      }
    })
  }
  clearCountryData() {
    this.country = {
      name: '',
      capitalCity: '',
      region: '',
      incomeLevel: '',
      iso2Code: '',
      latitude: '',
      longitude: ''
    };
  }
}
