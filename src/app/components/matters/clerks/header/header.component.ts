import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-clerks-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../clerks.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  chartSpecialty =  this.createHorizontalStackedChart();

  // Doughnut
  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [[60, 30, 35]];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartTypeColors: any[] = [
    {
      backgroundColor: ['#023866', '#006EB6', '#41C1F2'],
    },
  ];
  public doughnutChartOpts: ChartOptions = {
    cutoutPercentage: 90,
    tooltips: { enabled: false },
    plugins: {
      labels: {
        render: 'value',

        precision: 0,

        showZero: true,

        fontSize: 12,

        fontColor: '#023866',

        fontStyle: 'normal',

        fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

        textShadow: true,

        shadowBlur: 10,

        shadowOffsetX: -5,

        shadowOffsetY: 5,

        shadowColor: 'rgba(0,0,0,0)',
        arc: false,
        position: 'outside',
        overlap: true,

        showActualPercentages: true,
        outsidePadding: 2,
        textMargin: 4,
      },
    },
  };

  createHorizontalStackedChart () {
    return new Chart({
      chart: {
        type: 'bar'
      },
      colors: ['#41C1F0', '#006EB6', '#023866'],
      title: {
        text: ''
      },
      xAxis: {
        title: {
            text: null
        },
        categories: ['ABRAFARMA Networks', 'FEBRAFAR member', 'Other'],
        labels: {
          style: {
             color: '#023866',
             fontSize: '12px',
             fontFamily: "Lato",
             width: 150,
          }
       },
        gridLineWidth: 0,
      },
      yAxis: {
        title: {
            text: ""
        },
        labels: {
          enabled: false,
        },
        gridLineColor: '#023866',
        gridLineWidth: 0,
        plotLines: [{
            color: '#023866',
            width: 1,
            value: 0
        }],
        max: 70
      },
      legend: {
        reversed: true,
      },
      plotOptions: {
        series: {
          stacking: 'normal',
        },
        column: {
          stacking: 'normal',
          dataLabels: {
              enabled: true
          }
      }
      },
      credits: {
        enabled: false
      },
      series: [
      {
        name: '',
        showInLegend: false,
        type: 'column',
        data: [11, 14, 10],
      },
      {
        name: '',
        showInLegend: false,
        type: 'column',
        data: [10, 10, 10],
      },
      {
        name: '',
        showInLegend: false,
        type: 'column',
        data: [20, 20, 20],
      },
    ]
    });
  }
}
