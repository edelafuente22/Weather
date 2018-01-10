import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {
  weather: any = {};
  city: string = "san%20jose";
  temp;
  avgTemp;
  maxTemp;
  minTemp;
  humidity: number;
  description;

  constructor(private _dataService: DataService) { 
  }

  ngOnInit() {
    this._dataService.retrieveCity('san%20jose');
    this._dataService.data.subscribe(
      (weather) => {
        this.weather = weather;
        console.log(weather);
      })
      this.temp = (Math.floor(this.weather.main.temp * (9 / 5) - 459.67));
      this.avgTemp = Math.floor(this.temp * (9 / 5) - 459.67);
      this.maxTemp = Math.floor(this.weather.main.temp_max * (9 / 5) - 459.67);
      this.minTemp = Math.floor(this.weather.main.temp_min * (9 / 5) - 459.67);
  }
}