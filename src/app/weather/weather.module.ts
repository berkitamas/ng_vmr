import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WeatherDetailsComponent} from './weather-details/weather-details.component';
import {TemperaturePipe} from './temperature.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WeatherDetailsComponent,
    TemperaturePipe,
  ],
  bootstrap: [WeatherDetailsComponent]
})
export class WeatherModule { }
