import {Station} from './station';

/**
 * Class of a stom
 */
export class Stop {
  station: Station;
  track: number;
  stopTime: number;

  /**
   * @constructor
   * @param {Station} station - Station of the stop
   * @param {number} track - Track where the train stops at the station
   * @param {number} stopTime - Time when the train stops at the station
   */
  constructor(station: Station, track: number, stopTime: number) {
    this.station = station;
    this.track = track;
    this.stopTime = stopTime;
  }
}
