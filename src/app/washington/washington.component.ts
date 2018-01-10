import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
  weather: any = {};
  city: string = "washington";
  temp;
  avgTemp;
  maxTemp;
  minTemp;
  humidity: number;
  description;

  constructor(private _dataService: DataService) { 
  }

  ngOnInit() {
    this._dataService.retrieveCity('washington');
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