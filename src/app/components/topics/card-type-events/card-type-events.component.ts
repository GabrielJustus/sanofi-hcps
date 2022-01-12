import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-type-events',
  templateUrl: './card-type-events.component.html',
  styleUrls: ['./card-type-events.component.css']
})
export class CardTypeEventsComponent implements OnInit {

  public recTooltip1: boolean = false;
  public recTooltip2: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  reloadGraphic(state) {

  }

  openTooltip1() {
    this.recTooltip1 = !this.recTooltip1;
  }

  openTooltip2() {
    this.recTooltip2 = !this.recTooltip2;
  }
}
