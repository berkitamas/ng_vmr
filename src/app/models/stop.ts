import {Station} from './station';

export class Stop {
  station: Station;
  track: number;
  stopTime: number;
  constructor(station: Station, track: number, stopTime: number) {
    this.station = station;
    this.track = track;
    this.stopTime = stopTime;
  }
}
