import {Component, Input, OnInit} from '@angular/core';
import {Station} from '../../models/station';
import {WeatherService} from '../../services/weather.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {
  @Input() station: Station;

  temperature$: Observable<number>;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.temperature$ = this.weatherService.getTemperatureByStation(this.station);
  }

}
