import {Stop} from './stop';

export class Route {
  lineId: number;
  from: Stop;
  to: Stop;

  constructor(lineId: number, from: Stop, to: Stop) {
    this.lineId = lineId;
    this.from = from;
    this.to = to;
  }
}
