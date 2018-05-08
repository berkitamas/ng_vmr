/**
 * Class of a station
 */
export class Station {
  id: number;
  name: string;

  /**
   * @constructor
   * @param {number} id - ID of a station
   * @param {string} name - Name of a station
   */
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
