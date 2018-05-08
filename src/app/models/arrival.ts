import {Stop} from './stop';

/**
 * Class of an arrival
 */
export class Arrival {
  lineId: number;
  firstStation: Stop;
  currentStation: Stop;

  /**
   * @constructor
   * @param {number} lineId - ID of the line
   * @param {Stop} firstStation - First station of the line
   * @param {Stop} currentStation - Current station (where the train arrrives)
   */
  constructor(lineId: number, firstStation: Stop, currentStation: Stop) {
    this.lineId = lineId;
    this.firstStation = firstStation;
    this.currentStation = currentStation;
  }
}
