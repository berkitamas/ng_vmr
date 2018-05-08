import { Injectable } from '@angular/core';
import {Station} from '../models/station';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class WeatherService {

  constructor() { }

  /**
   * Fetches the temperature (in fahrenheit) by the given number
   * @param {Station} station - The station which we want its temperature
   * @returns {Observable<number>} - Observable with the temperature
   */
  getTemperatureByStation(station: Station): Observable<number> {
    // Mock data, does nothing usable
    const size = station.name.split('').reduce((acc, value) => acc += value.charCodeAt(0), 0);
    return of((size + (Date.now() / 7200)) % 100);
  }
}
