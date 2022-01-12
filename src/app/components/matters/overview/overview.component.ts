import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  isCollapsed = true;
  visibleTabContent = 'painAndFever';

  constructor() { }

  ngOnInit(): void {
  }

  toggleCollapsed1() {
    this.isCollapsed = !this.isCollapsed;

    // if (!this.isCollapsed)
    //   this.section2ChartVertical = this.createVerticalBarChart([45, 30, 12, 10], ['Prefer using TEXT', 'VÍDEO', 'PRINTED MATERIALS', 'PODCASTS'], 90, true);
  }
}
