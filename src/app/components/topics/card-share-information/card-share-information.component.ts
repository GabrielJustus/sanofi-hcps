import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-share-information',
  templateUrl: './card-share-information.component.html',
  styleUrls: ['./card-share-information.component.css']
})
export class CardShareInformationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  reloadGraphic(state) {
    console.log('toggle')
  }
}
