import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchStationsComponent} from './search-stations/search-stations.component';
import {StationArrivalComponent} from './station-details/station-arrival/station-arrival.component';
import {StationDepartureComponent} from './station-details/station-departure/station-departure.component';
import {SearchStationsFormComponent} from './search-stations/search-stations-form/search-stations-form.component';
import {StationDetailsComponent} from './station-details/station-details.component';
import {SearchStationsResultsComponent} from './search-stations/search-stations-results/search-stations-results.component';
import {StationRoutes} from './station.routes';
import {StationDetailsResolver} from './station-details/station-details.resolver';
import {MatCardModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatListModule, MatTabsModule} from '@angular/material';
import {LineModule} from '../line/line.module';
import {WeatherModule} from '../weather/weather.module';

@NgModule({
  imports: [
    StationRoutes,
    LineModule,
    WeatherModule,
    MatTabsModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule,
    MatFormFieldModule,
    MatCardModule,
    CommonModule
  ],
  declarations: [
    SearchStationsComponent,
    SearchStationsFormComponent,
    SearchStationsResultsComponent,
    StationDetailsComponent,
    StationArrivalComponent,
    StationDepartureComponent,
  ],
  providers: [
    StationDetailsResolver
  ],
  bootstrap: [SearchStationsComponent]
})
export class StationModule { }
