import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Station} from '../models/station';
import {STATIONS} from '../mock-trains';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class TrainService {

  constructor() { }

  static getStations(): Observable<Station[]> {
    return of(STATIONS);
  }

  searchStations(term: string): Observable<Station[]> {
    return TrainService.getStations().map(stations => stations.filter(station => station.name.toLowerCase().includes(term.toLowerCase())));
  }

  getStation(id: number): Observable<Station> {
    return TrainService.getStations().switchMap(stations => {
      return stations.filter(station => station.id === id);
    }).first();
  }

}
