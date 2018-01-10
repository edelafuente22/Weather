import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  data: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private _http: HttpClient) {
  }

  retrieveCity(city: string){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=267157f72f1caa541ce4b21c146381dd')
      .subscribe((weather: any) => {
        this.data.next(weather);
      });
  }

}


