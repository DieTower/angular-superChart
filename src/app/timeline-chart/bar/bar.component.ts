import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit, OnChanges {

  public _width: number;
  public _margin: number;

  constructor() {
    this._width = 0;
    this._margin = 0;
  }

  ngOnInit() {
  }

  ngOnChanges() {

    // --- Adjust the width ---
    this.adjustment(this.width);
  }

  public adjustment(width: number): void {
    width = width > 100 ? 100 : width;
    this.width = (width + this._margin) > 100 ? (width - this.margin) : width;
  }

  // --- Border-radius Triggers ---
  public borderRightTrigger(): boolean {
    return (this.width == 100) || ((this.margin + this.width) >= 100);
  }

  public borderLeftTrigger(): boolean {
    return this.margin != 0;
  }

  // --- Get's and Set's ---
  get width(): number {
    return this._width;
  }

  @Input()
  set width(width: number) {
    this._width = width > 100 ? 100 : width;
  }

  get margin(): number {
    return this._margin;
  }

  @Input()
  set margin(margin: number) {
    this._margin = margin;
  }

}
