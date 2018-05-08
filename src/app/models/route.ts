import {Stop} from './stop';

/**
 * Class of a route
 */
export class Route {
  lineId: number;
  from: Stop;
  to: Stop;

  /**
   * @constructor
   * @param {number} lineId - ID of the line
   * @param {Stop} from - Station from the train leave
   * @param {Stop} to - Station where the train arrive
   */
  constructor(lineId: number, from: Stop, to: Stop) {
    this.lineId = lineId;
    this.from = from;
    this.to = to;
  }
}
