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

  /**
   * Fetches the stations from mock-trains
   * @returns {Observable<Station[]>} - Observable with the stations
   */
  static getStations(): Observable<Station[]> {
    return of(STATIONS);
  }

  /**
   * Fetches the lines from mock-trains
   * @returns {Observable<Line[]>} - Observable with the lines
   */
  static getLines(): Observable<Line[]> {
    return of(LINES);
  }

  /**
   * Search for stations by the given terms
   * @param {string} term - The term of the search
   * @returns {Observable<Station[]>} - Observable with the search results
   */
  searchStations(term: string): Observable<Station[]> {
    return TrainService.getStations().map(stations => stations.filter(station => station.name.toLowerCase().includes(term.toLowerCase())));
  }

  /**
   * Fetches the station by the given id
   * @param {number} id - ID of the station
   * @returns {Observable<Station>} - Observable with the station
   */
  getStation(id: number): Observable<Station> {
    return TrainService.getStations()
      .map(stations => stations.filter(station => station.id === id)[0]);
  }

  /**
   * Fetches the line by the given ID
   * It also sorts the stops
   * @param {number} id - ID of line
   * @returns {Observable<Line>} - Observable witht the line
   */
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

  /**
   * Fetches all the arrivals by the station ID where the trains arrive
   * @param {number} id - The station ID where the trains arrive
   * @returns {Observable<Arrival[]>} - Observable with the arrivals
   */
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
      .map(lines => lines.map(line => new Arrival(
        line.id,
        line.stations[0],
        line.stations.filter(stop => stop.station.id === id)[0])
      ));
  }

  /**
   * Fetches all the departures by the station ID from where the trains leave
   * @param {number} id - The station ID from where the trains leave
   * @returns {Observable<any>} - Observable with the departures
   */
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
      )));
  }

  /**
   * Searches for routes by the given parameters
   * @param {string} from - The name of the station from where the train leave (can be part of it)
   * @param {string} to - The name of the station from where the train leave (can be part of it)
   * @param {number} fromTime - The earliest time of the route
   * @param {number} toTime - The latest time of the route
   * @returns {Observable<Route[]>} - Observable with the routes
   */
  searchRoutes(from: string, to: string, fromTime?: number, toTime?: number): Observable<Route[]> {
    return TrainService.getLines()
      // Searches for the lines by the name (from)
      .map(
        lines => lines.filter(line => line.stations.map(stop => stop.station.name.toLowerCase()).includes(from.toLowerCase()))
      )
      // Searches for the lines by the name (to)
      // It must stop after the station from where the train leave
      .map(
        lines => lines.filter(line => {
          const fromStop = line.stations.find(stop => stop.station.name === from);
          return line.stations.find(stops => (stops.stopTime > fromStop.stopTime &&
            stops.station.name.toLowerCase() === to.toLowerCase())) !== undefined;
        })
      )
      // Transform the results to Route object
      .map(lines => lines.map(line => {
        const fromStop = line.stations.find(stop => stop.station.name.toLowerCase() === from.toLowerCase());
        const toStop = line.stations.find((stop) => (
          stop.stopTime > fromStop.stopTime && stop.station.name.toLowerCase() === to.toLowerCase()
        ));
        return new Route(line.id, fromStop, toStop);
      }))
      // Sorts the result
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
