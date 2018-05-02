import {Stop} from './stop';

export class Line {
  id: number;
  stations: Stop[];
  startTime: number;
  endTime: number;
  constructor(id: number, stations: Stop[], startTime: number, endTime: number) {
    this.id = id;
    this.stations = stations;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}
