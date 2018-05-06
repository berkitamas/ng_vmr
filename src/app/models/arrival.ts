import {Stop} from './stop';

export class Arrival {
  lineId: number;
  firstStation: Stop;
  currentStation: Stop;

  constructor(lineId: number, firstStation: Stop, currentStation: Stop) {
    this.lineId = lineId;
    this.firstStation = firstStation;
    this.currentStation = currentStation;
  }
}
