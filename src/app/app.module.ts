import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import {LineModule} from './line/line.module';
import {StationModule} from './station/station.module';
import {WeatherModule} from './weather/weather.module';
import {AppRouterModule} from './app.router.module';
import { RootComponent } from './root/root.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RootComponent,
  ],
  imports: [
    AppRouterModule,
    BrowserModule,
    LineModule,
    StationModule,
    WeatherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
