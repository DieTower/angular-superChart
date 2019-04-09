import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { TimelineChartComponent } from './timeline-chart/timeline-chart.component';
import { BarComponent } from './timeline-chart/bar/bar.component';
import { BarSpanComponent } from './timeline-chart/bar-span/bar-span.component';
import { BarContextComponent } from './timeline-chart/bar-context/bar-context.component';


@NgModule({
  declarations: [
    AppComponent,
    TimelineChartComponent,
    BarComponent,
    BarSpanComponent,
    BarContextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
