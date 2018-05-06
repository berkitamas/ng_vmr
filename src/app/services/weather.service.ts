import { Injectable } from '@angular/core';
import {Station} from '../models/station';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class WeatherService {

  constructor() { }

  getTemperatureByStation(station: Station): Observable<number> {
    const size = station.name.split('').reduce((acc, value) => acc += value.charCodeAt(0), 0);
    return of((size + (Date.now() / 7200)) % 100);
  }
}
