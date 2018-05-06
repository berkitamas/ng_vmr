import {Component, Input, OnInit} from '@angular/core';
import {Station} from '../../../models/station';
import {TrainService} from '../../../services/train.service';
import {Arrival} from '../../../models/arrival';

@Component({
  selector: 'app-station-arrival',
  templateUrl: './station-arrival.component.html',
  styleUrls: ['./station-arrival.component.css']
})
export class StationArrivalComponent implements OnInit {
  @Input() station: Station;

  arrivals: Arrival[];

  constructor(private trainService: TrainService) { }

  ngOnInit() {
    this.trainService.getStationArrivals(this.station.id)
      .subscribe(arrivals => this.arrivals = arrivals.sort((a, b) => {
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
