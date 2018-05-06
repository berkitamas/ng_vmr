import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Station} from '../models/station';
import {LINES, STATIONS} from '../mock-trains';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/switchMap';
import {Line} from '../models/line';
import 'rxjs/add/operator/do';
import {Arrival} from '../models/arrival';
import {Departure} from '../models/departure';
import {Route} from '../models/route';

@Injectable()
export class TrainService {

  constructor() { }

  static getStations(): Observable<Station[]> {
    return of(STATIONS);
  }

  static getLines(): Observable<Line[]> {
    return of(LINES);
  }

  searchStations(term: string): Observable<Station[]> {
    return TrainService.getStations().map(stations => stations.filter(station => station.name.toLowerCase().includes(term.toLowerCase())));
  }

  getStation(id: number): Observable<Station> {
    return TrainService.getStations()
      .map(stations => stations.filter(station => station.id === id)[0]);
  }

  getLine(id: number): Observable<Line> {
    return TrainService.getLines()
      .map(lines => lines.filter(line => line.id === id)[0])
      .map(line => {
        line.stations = line.stations.sort((a, b) => {
          if (a.stopTime < b.stopTime) {
            return -1;
          } else if (a.stopTime > b.stopTime) {
            return 1;
          } else {
            return 0;
          }
        });
        return line;
      });
  }


  getStationArrivals(id: number): Observable<Arrival[]> {
    return TrainService.getLines()
      .map(lines => lines.map(line => {
        line.stations.sort((a, b) => {
          if (a.stopTime < b.stopTime) {
            return -1;
          } else if (a.stopTime > b.stopTime) {
            return 1;
          } else {
            return 0;
          }
        });
        return line;
      }))
      .map(lines => lines.filter(line => line.stations.map(stop => stop.station.id).includes(id, 1)))
      .do(lines => console.log(lines))
      .map(lines => lines.map(line => new Arrival(
        line.id,
        line.stations[0],
        line.stations.filter(stop => stop.station.id === id)[0])
      ));
  }

  getStationDeparutes(id: number) {
    return TrainService.getLines()
      .map(lines => lines.filter(line => {
        const idx = line.stations.map(stop => stop.station.id).indexOf(id);
        return (idx >= 0 && idx < line.stations.length - 1);
      }))
      .map(lines => lines.map(line => new Departure(
        line.id,
        line.stations.filter(stop => stop.station.id === id)[0],
        line.stations[line.stations.length - 1],
      )))
      .do(lines => console.log(lines));
  }

  searchRoutes(from: string, to: string, fromTime?: number, toTime?: number): Observable<Route[]> {
    return TrainService.getLines()
      .map(
        lines => lines.filter(line => line.stations.map(stop => stop.station.name.toLowerCase()).includes(from.toLowerCase()))
      )
      .map(
        lines => lines.filter(line => {
          const fromStop = line.stations.find(stop => stop.station.name === from);
          return line.stations.find(stops => (stops.stopTime > fromStop.stopTime &&
            stops.station.name.toLowerCase() === to.toLowerCase())) !== undefined;
        })
      )
      .map(lines => lines.map(line => {
        const fromStop = line.stations.find(stop => stop.station.name.toLowerCase() === from.toLowerCase());
        const toStop = line.stations.find((stop) => (
          stop.stopTime > fromStop.stopTime && stop.station.name.toLowerCase() === to.toLowerCase()
        ));
        return new Route(line.id, fromStop, toStop);
      }))
      .map(
        routes => routes.filter(route => (
          (fromTime == null || fromTime <= route.from.stopTime) &&
          (toTime == null || toTime >= route.from.stopTime)
        ))
      )
      .map(routes => routes.sort((a, b) => {
        if (a.from.stopTime < b.from.stopTime) {
          return -1;
        } else if (a.from.stopTime > b.from.stopTime) {
          return 1;
        } else {
          return 0;
        }
      }));
  }
}
