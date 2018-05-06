import {Stop} from './stop';

export class Departure {
  lineId: number;
  currentStation: Stop;
  lastStation: Stop;

  constructor(lineId: number, currentStation: Stop, lastStation: Stop) {
    this.lineId = lineId;
    this.currentStation = currentStation;
    this.lastStation = lastStation;
  }
}
