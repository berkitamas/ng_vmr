import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {TrainService} from '../../services/train.service';
import {Route} from '../../models/route';

@Component({
  selector: 'app-search-lines',
  templateUrl: './search-lines.component.html',
  styleUrls: ['./search-lines.component.css']
})
export class SearchLinesComponent implements OnInit {

  routesFound: Route[] = [];

  constructor(private trainService: TrainService) { }

  ngOnInit() {
  }

  onSearch(form: FormGroup) {
    const fromTime = (form.get('fromtime').value) ?
      form.get('fromtime').value
        .split(':')
        .reduce((acc, value, idx) => (idx === 0) ? acc + Number(value) * 60 : acc + Number(value), 0) :
      null;
    const toTime = (form.get('totime').value) ?
      form.get('totime').value
        .split(':')
        .reduce((acc, value, idx) => (idx === 0) ? acc + Number(value) * 60 : acc + Number(value), 0) :
      null;
    this.trainService.searchRoutes(
      form.get('fromstation').value,
      form.get('tostation').value,
      fromTime,
      toTime
    ).subscribe(routes => this.routesFound = routes);
  }

}
