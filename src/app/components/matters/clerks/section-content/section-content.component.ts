import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-clerks-section-content',
  templateUrl: './section-content.component.html',
  styleUrls: ['./section-content.component.css', '../clerks.component.css']
})
export class SectionContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isCollapsed = true;
  isCollapsed2 = true;
  isCollapsed3 = true;
  isCollapsed4 = true;
  isCollapsed5 = true;

  section1TooltipFormat = false;
  section1TooltipSearch = false;
  section1TooltipSearch2 = false;

  section2TooltipTopic = false;
  section2TooltipTopic2 = false;
  section2TooltipTopic3 = false;
  section2TooltipTopic4 = false;
  section2TooltipElearn = false;

  recTooltip1 = false;
  recTooltip2 = false;


  section2ELearningChart = this.createHorizontalBarChart([75, 68, 49, 48, 14], ['Scientific topics', 'Focused on patients', 'Clinical cases with products', 'Focused on benefits / mode action / product dosage', 'Focused on commercial part / administrative / finnancial'], 90, true);
  section2ChartVertical = this.createVerticalBarChart([41, 28, 7, 1], ['Prefer using VÍDEO', 'PRINTED MATERIALS', 'PODCASTS/AUDIO', 'INFOGRAPHICS'], 200, true);
  chartSearchChannel = this.createChartSearchChannel();

  public doughnutChartLabels3: Label[] = [
    'The searches are\nalso made through\nrepresentatives (9%)',
    'training/website\nof the company (6%)',
    'Others',
    'INTERNET\nis the\nmost widely\nused resource in\ntheir searches\n(68%)',
  ];
  public doughnutChartData3: MultiDataSet = [[22.5, 20, 22.5, 35]];
  public doughnutChartType3: ChartType = 'doughnut';
  public doughnutChartTypeColors3: any[] = [
    {
      backgroundColor: ['#41C1F0', '#93D1F2', '#DADADA', '#003866'],
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

  public doughnutChartLabels4: Label[] = [
    'Personal conversation\nwith other\nprofessionals (57%)',
    'Online\nconversation (53%)',
    'Social media (45%)',
    'Online\nsearch (62%)',
  ];
  public doughnutChartData4: MultiDataSet = [[20, 20, 20, 40]];
  public doughnutChartType4: ChartType = 'doughnut';
  public doughnutChartTypeColors4: any[] = [
    {
      backgroundColor: ['#41C1F0', '#93D1F2', '#DADADA', '#003866'],
    },
  ];
  public doughnutChartOpts4: ChartOptions = {
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

  openTooltip1() {
    this.recTooltip1 = !this.recTooltip1;
  }
  openTooltip2(){
    this.recTooltip2 = !this.recTooltip2;
  }


  toggleCollapsed1() {
    this.isCollapsed = !this.isCollapsed;

    if (!this.isCollapsed)
      this.section2ChartVertical = this.createVerticalBarChart([41, 28, 7, 1], ['Prefer using VÍDEO', 'PRINTED MATERIALS', 'PODCASTS/AUDIO', 'INFOGRAPHICS'], 200, true);
  }


  toggleCollapsed4() {
    this.isCollapsed4 = !this.isCollapsed4;

    if (!this.isCollapsed4)
      this.section2ELearningChart = this.createHorizontalBarChart([75, 68, 49, 48, 14], ['Scientific topics', 'Focused on patients', 'Clinical cases with products', 'Focused on benefits / mode action / product dosage', 'Focused on commercial part / administrative / finnancial'], 90, true);
  }

  createHorizontalBarChart (data, labels, max = 65, colorByPoint = false) {
    return new Chart({
      chart: {
        type: 'bar',
        backgroundColor: 'transparent',
      },
      title: {
        text: ''
      },
      credits: {
        enabled: false
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
                  fontFamily: "Lato",
                  textOutline: 'none',
                },
                borderWidth: 0,
                borderColor: '#023866',
            }
        },
        bar: {
          colorByPoint: colorByPoint,
          colors: ['#023866', '#023866', '#023866', '#41C1F2', '#41C1F2'],
        }
      },
      legend: {
        enabled: false
      },
      series: [
        {
          name: '',
          type: 'bar',
          color: '#023866',
          data: data,
          dataLabels: {
            enabled: true,
            inside: false,
            style: {
              fontSize: '20px',
              fontFamily: "Lato",
              color: '#023866',
              textOutline: 'none',
            }
          }
        }
      ],
      xAxis: {
        categories: labels,
        title: {
            text: null
        },
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
        lineColor: '#023866',
        max: max
      },
    });
  }
  createVerticalBarChart (data, labels, max = 100, colorByPoint = false) {
    return new Chart({
      chart: {
        type: 'column',
        backgroundColor: 'transparent',
      },
      title: {
        text: ''
      },
      colors: ["#023866", "#006EB6", "#41C1F2", "#DADADA"],
      credits: {
        enabled: false
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
                  fontFamily: "Lato",
                  textOutline: 'none',
                },
                borderWidth: 0,
                borderColor: '#023866',
            }
        },
        column: {
          colorByPoint: colorByPoint,
          colors: ["#023866", "#006EB6", "#41C1F2", "#DADADA"],
        }
      },
      legend: {
        enabled: false
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
              fontFamily: "Lato",
              color: '#023866',
              textOutline: 'none',
            }
          }
        }
      ],
      xAxis: {
        categories: labels,
        title: {
            text: null
        },
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
        lineColor: '#023866',
        max: max
      },
    });
  }
  createChartSearchChannel(){
    return new Chart({
      chart: {
        plotBorderWidth: 0,
        plotShadow: false,
        backgroundColor: '',
      },
      colors: ["#003866", "#F1EEEE"],
      title: {
        text: '',
        align: 'center',
        verticalAlign: 'middle',
        y: 60
      },
      credits: {
        enabled: false
      },
      tooltip: {
        // pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        pointFormat: '<b>90%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'white'
            }
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '75%'],
          size: '150%'
        }
      },
      series: [{
        type: 'pie',
        name: '',
        innerSize: '90%',
        data: [
          ['', 60],
          {
            name: 'Other',
            y: 8.2,
            dataLabels: {
              enabled: false
            }
          }
        ]
      }]
    });
  }

  openSection1TooltipFormat() {
    this.section1TooltipFormat = !this.section1TooltipFormat;
  }

  openSection1TooltipSearch() {
    this.section1TooltipSearch = !this.section1TooltipSearch;
  }

  openSection1TooltipSearch2(){
    this.section1TooltipSearch2 = !this.section1TooltipSearch2;

  }

  openSection2TooltipTopic() {
    this.section2TooltipTopic = !this.section2TooltipTopic;
  }

  openSection2TooltipTopic2() {
    this.section2TooltipTopic2 = !this.section2TooltipTopic2;
  }

  openSection2TooltipTopic3() {
    this.section2TooltipTopic3 = !this.section2TooltipTopic3;
  }

  openSection2TooltipTopic4() {
    this.section2TooltipTopic4 = !this.section2TooltipTopic4;
  }

  openSection2TooltipElearn() {
    this.section2TooltipElearn = !this.section2TooltipElearn;
  }

}
