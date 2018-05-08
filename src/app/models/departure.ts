import {Stop} from './stop';

/**
 * Class of a departure
 */
export class Departure {
  lineId: number;
  currentStation: Stop;
  lastStation: Stop;

  /**
   * @constructor
   * @param {number} lineId - ID of the line
   * @param {Stop} currentStation - Current station from where the train leave
   * @param {Stop} lastStation - Last station of the line
   */
  constructor(lineId: number, currentStation: Stop, lastStation: Stop) {
    this.lineId = lineId;
    this.currentStation = currentStation;
    this.lastStation = lastStation;
  }
}
