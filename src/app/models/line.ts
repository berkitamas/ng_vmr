import {Stop} from './stop';

/**
 * Class of a line
 */
export class Line {
  id: number;
  stations: Stop[];

  /**
   * @constructor
   * @param {number} id - ID of the line
   * @param {Stop[]} stations - Stops of the line
   */
  constructor(id: number, stations: Stop[]) {
    this.id = id;
    this.stations = stations;
  }
}
