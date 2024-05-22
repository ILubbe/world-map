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

  printCountryData(event: any) {
    this.apiService.setCountryData(event.target.id).subscribe((data: any) => {
      this.country = {
        ...data,
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
