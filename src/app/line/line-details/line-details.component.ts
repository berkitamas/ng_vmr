import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Line} from '../../models/line';
import {TrainService} from '../../services/train.service';

@Component({
  selector: 'app-line-details',
  templateUrl: './line-details.component.html',
  styleUrls: ['./line-details.component.css']
})
export class LineDetailsComponent implements OnInit {

  @Input() lineId: number;

  displayedColumns = ['name', 'track', 'time', 'temperature'];

  lineDetails$: Observable<Line>;

  constructor(private trainService: TrainService) { }

  ngOnInit() {
    this.lineDetails$ = this.trainService.getLine(this.lineId);
  }

}
