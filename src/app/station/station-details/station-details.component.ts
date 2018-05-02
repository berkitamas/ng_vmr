import {Component, OnInit} from '@angular/core';
import {TrainService} from '../../services/train.service';
import {Observable} from 'rxjs/Observable';
import {Station} from '../../models/station';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-station-details',
  templateUrl: './station-details.component.html',
  styleUrls: ['./station-details.component.css']
})
export class StationDetailsComponent implements OnInit {
  station$: Observable<Station>;

  constructor(private trainService: TrainService, private route: ActivatedRoute) {
    this.station$ = this.route.data.pipe(map(data => data.station));
  }

  ngOnInit() {
  }

}
