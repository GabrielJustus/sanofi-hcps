import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {

  isCollapsed: boolean = true;
  @Input() relativePathIcon: string = '';
  @Input() title: string = '';
  @Input() description: string = '';

  @Output() toggle: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
    this.toggle.emit({ isCollapsed: this.isCollapsed });
  }

}
