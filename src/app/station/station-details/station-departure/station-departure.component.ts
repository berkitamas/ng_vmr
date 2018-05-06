import {Component, Input, OnInit} from '@angular/core';
import {Station} from '../../../models/station';
import {TrainService} from '../../../services/train.service';
import {Departure} from '../../../models/departure';

@Component({
  selector: 'app-station-departure',
  templateUrl: './station-departure.component.html',
  styleUrls: ['./station-departure.component.css']
})
export class StationDepartureComponent implements OnInit {
  @Input() station: Station;

  departures: Departure[];

  constructor(private trainService: TrainService) { }

  ngOnInit() {
    this.trainService.getStationDeparutes(this.station.id)
      .subscribe(departures => this.departures = departures.sort((a, b) => {
        if (a.currentStation.stopTime < b.currentStation.stopTime) {
          return -1;
        } else if (a.currentStation.stopTime > b.currentStation.stopTime) {
          return 1;
        } else {
          return 0;
        }
      }));
  }

}
