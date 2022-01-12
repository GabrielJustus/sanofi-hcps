import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface Tabname {
  id: any;
  label: string
}
@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() tabs: Array<Tabname> = [];
  @Output() changeTabActive = new EventEmitter();
  public activeTab: any = '';

  constructor() { }

  ngOnInit(): void {
    console.log(this.tabs)
    this.activeTab = this.tabs ? this.tabs[0].id : '';
  }

  toggleTab(tabId) {
    this.activeTab = tabId;
    this.changeTabActive.emit(tabId);
  }
}
