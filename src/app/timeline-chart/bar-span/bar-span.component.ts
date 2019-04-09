import { Component, OnInit } from '@angular/core';
import { Calendar } from '../models/calendar';
import { General } from '../services/general.service';
import { spawnSync } from 'child_process';

@Component({
  selector: 'app-bar-span',
  templateUrl: './bar-span.component.html',
  styleUrls: ['./bar-span.component.scss'],
  providers: [General]
})
export class BarSpanComponent implements OnInit {

  public spans: string[] = [
    this._service.justFirstOne(Calendar.Year),
    this._service.justFirstOne(Calendar.Month),
    this._service.justFirstOne(Calendar.Day)
  ];

  public total: number = this.spans.length;
  public divFor: number = 100/this.total;

  // CSS Style
  public gridConfigColumns: string = `repeat(${this.total},${this.divFor}%)`;
  public gridConfigRows: string = `1fr`;

  constructor(
    private _service: General
  ) { }

  ngOnInit() {
  }

}
