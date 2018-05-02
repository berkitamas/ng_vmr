import { Component, OnInit } from '@angular/core';
import {TrainService} from '../../services/train.service';
import {Station} from '../../models/station';

@Component({
  selector: 'app-search-stations',
  templateUrl: './search-stations.component.html',
  styleUrls: ['./search-stations.component.css']
})
export class SearchStationsComponent implements OnInit {
  stations: Station[];
  constructor(private trainService: TrainService) { }

  ngOnInit() {
    TrainService.getStations()
      .subscribe(stations => this.stations = stations);
  }

  onSearchValueChanged(value: string) {
    this.trainService.searchStations(value)
      .debounceTime(400)
      .subscribe(stations => this.stations = stations);
  }

}
