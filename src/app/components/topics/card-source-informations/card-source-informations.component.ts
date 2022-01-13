import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-card-source-informations',
  templateUrl: './card-source-informations.component.html',
  styleUrls: ['./card-source-informations.component.css'],
})
export class CardSourceInformationsComponent implements OnInit {
  section2ChartVertical = this.createVerticalBarChart(
    [22, 33, 18],
    ['doctors', 'nutritionists', 'pharmacists'],
    90,
    true
  );

  public doughnutChartLabels3: Label[] = [
    'Scientific articles and studies\namong physical therapists\n(16%)',
    'Scientific articles and studies\namong nutritionists(37%)',
    'Pubmed\namong physicians\n(20%)',
  ];
  public doughnutChartData3: MultiDataSet = [[16, 37, 20]];
  public doughnutChartType3: ChartType = 'doughnut';
  public doughnutChartTypeColors3: any[] = [
    {
      backgroundColor: ['#023866', '#006EB6', '#41C1F2'],
    },
  ];
  public doughnutChartOpts3: ChartOptions = {
    legend: { display: false },
    cutoutPercentage: 90,
    tooltips: { enabled: false },
    plugins: {
      labels: {
        render: 'label',

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

        shadowColor: 'rgba(255,0,0,0)',
        arc: false,
        position: 'outside',
        overlap: true,

        showActualPercentages: true,
        outsidePadding: 2,
        textMargin: 10,
      },
    },
  };

  constructor() {}

  ngOnInit(): void {}

  reloadGraphic(state) {
    console.log('toggle foi acionado no componente', state.isCollapsed);
  }

  createVerticalBarChart(data, labels, max = 65, colorByPoint = false) {
    return new Chart({
      chart: {
        type: 'column',
        backgroundColor: 'transparent',
      },
      title: {
        text: '',
      },
      colors: ['#023866', '#006EB6', '#41C1F2', '#DADADA'],
      credits: {
        enabled: false,
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            inside: false,
            format: '{point.y}%',
            style: {
              fontSize: '20px',
              fontFamily: 'Lato',
              textOutline: 'none',
            },
            borderWidth: 0,
            borderColor: '#023866',
          },
        },
        column: {
          colorByPoint: colorByPoint,
          colors: ['#023866', '#006EB6', '#41C1F2', '#DADADA'],
        },
      },
      legend: {
        enabled: false,
      },
      series: [
        {
          name: '',
          type: 'column',
          color: '#023866',
          data: data,
          dataLabels: {
            enabled: true,
            inside: false,
            style: {
              fontSize: '20px',
              fontFamily: 'Lato',
              color: '#023866',
              textOutline: 'none',
            },
          },
        },
      ],
      xAxis: {
        categories: labels,
        title: {
          text: null,
        },
        labels: {
          style: {
            color: '#023866',
            fontSize: '12px',
            fontFamily: 'Lato',
            width: 150,
          },
        },
        gridLineWidth: 0,
      },
      yAxis: {
        title: {
          text: '',
        },
        labels: {
          enabled: false,
        },
        gridLineColor: '#023866',
        gridLineWidth: 0,
        plotLines: [
          {
            color: '#023866',
            width: 1,
            value: 0,
          },
        ],
        lineColor: '#023866',
        max: max,
      },
    });
  }
}
