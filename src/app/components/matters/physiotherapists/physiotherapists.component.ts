import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-physiotherapists',
  templateUrl: './physiotherapists.component.html',
  styleUrls: ['./physiotherapists.component.css', '../../animations.css', '../../tabs.css']
})
export class PhysiotherapistsComponent implements OnInit {

  isCollapsed = true;
  isCollapsed2 = true;
  isCollapsed3 = true;
  isCollapsed4 = true;
  isCollapsed5 = true;
  isCollapsed6 = true;

  isCollapsed10 = true;
  isCollapsed11 = true;

  recTooltip1 = false
  recTooltip2 = false

  section2TooltipTopic = false;
  section2TooltipElearn = false;

  section1TooltipFormat = false;

  section1TooltipSearch = false
  section1TooltipSearch2 = false

  section4Tooltip1 = false;
  section4Tooltip2 = false;
  section4Tooltip3 = false;
  section4Tooltip4 = false;
  section4Tooltip5 = false;
  section4Tooltip6 = false;
  section4Tooltip7 = false;


  public barChartOptions3: ChartOptions = {
    responsive: true,
    tooltips: { enabled: false },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: { fontSize: 0 },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: { fontSize: 0 },
        },
      ],
    },
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
  public barChartLabels3: Label[] = [
    'Prefer using\nTEXT',
    'VIDEO',
    'PRINTED\nMATERIALS',
    'PODCASTS',
  ];
  public barChartType3: ChartType = 'bar';
  public barChartLegend3 = false;
  public barChartPlugins3 = [];

  public barChartData3: ChartDataSets[] = [{ data: [65, 59, 80, 81] }];

  public chartColors3: any[] = [
    {
      backgroundColor: ['#023866', '#006EB6', '#41C1F2', '#DADADA'],
    },
  ];

  // Doughnut
  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [[25, 15, 10]];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartTypeColors: any[] = [
    {
      backgroundColor: ['#023866', '#006EB6', '#41C1F2', '#94D0F2'],
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

  public doughnutChartLabels3: Label[] = [
    'INTERNET\nis the\nmost widely\nused resource in\ntheir searches\n(76%)',
    'Studies and Articles\n(16%)',
    'Refresher Courses\n(8%)',
  ];
  public doughnutChartData3: MultiDataSet = [[76, 16, 8]];
  public doughnutChartType3: ChartType = 'doughnut';
  public doughnutChartTypeColors3: any[] = [
    {
      backgroundColor: ['#023866', '#006EB6', '#41C1F2', '#DADADA'],
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

  public doughnutChartLabels2: Label[] = [];
  public doughnutChartData2: MultiDataSet = [[100, 100]];
  public doughnutChartType2: ChartType = 'doughnut';
  public doughnutChartTypeColors2: any[] = [
    {
      backgroundColor: ['#023866', '#006EB6'],
      borderWidth: 2,
    },
  ];

  public doughnutChartOpts2: ChartOptions = {
    cutoutPercentage: 90,
    tooltips: { enabled: false },
    plugins: {
      labels: false
    }
  };

  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = false;
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: true,
          },
        },
      ],
    },
  };

  public chartColors: any[] = [
    {
      backgroundColor: ['#023866', '#006EB6', '#41C1F2', '#94D0F2'],
    },
  ];

  public barChartData: ChartDataSets[] = [
    // { data: [1, 2, 3, 4], label: '', backgroundColor: ['#023866'],},/
    { data: [1, 2, 3, 4], label: '', stack: 'a', backgroundColor: ['#006EB6'] },
    { data: [1, 2, 3, 4], label: '', stack: 'a', backgroundColor: ['#41C1F2'] },
    { data: [1, 2, 3, 4], label: '', stack: 'a', backgroundColor: ['#94D0F2'] },
  ];
  public barChartLabels: string[] = [
    'Pediatricians',
    'General practitioners',
    'Otolaryngologists',
    'Allergists',
  ];

  public barChartType2: ChartType = 'horizontalBar';
  public barChartLegend2 = false;
  public barChartOptions2: ChartOptions = {
    responsive: true,
    tooltips: { enabled: false },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: { fontSize: 0 },

        },
      ],
      yAxes: [
        {
          gridLines: {
            display: true,
          },
          ticks: { fontSize: 0 },
        },
      ],
    },
  };

  public chartColors2: any[] = [
    {
      backgroundColor: ['#023866', '#006EB6', '#41C1F2', '#94D0F2', '#41C1F2'],
    },
  ];

  public barChartData2: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: '' },
  ];
  public barChartLabels2: string[] = [
    'Scientific topics',
    'Focused on patients',
    'Clinical cases with products',
    'Foco nos benefícios',
    'Foco na parte comercial',
  ];

  activeTab = 1;
  activeSubTab1 = 1;
  activeSubTab2 = 1;



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


  createHorizontalStackedChart () {
    return new Chart({
      chart: {
        type: 'bar'
      },
      colors: ['#94D0F2', '#41C1F2', '#006EB6', '#023866',  ],
      title: {
        text: ''
      },
      xAxis: {
        title: {
            text: null
        },
        categories: ['Pediatricians', 'General practitioners', 'Otolaryngologists', 'Allergists'],
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
        data: [10, 10, 8, 2]
      },
      {
        name: '',
        showInLegend: false,
        type: 'column',
        data: [8, 8, 8, 6]
      },
      {
        name: '',
        showInLegend: false,
        type: 'column',
        data: [12, 12, 10, 6]

      },
      {
        showInLegend: false,
        name: '',
        type: 'column',
        data: [40, 40, 34, 27]
      },
      // {
      //   name: '',
      //   showInLegend: false,
      //   type: 'column',
      //   data: [26, 6]
      // },
    ]
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
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
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

  /* SECTION 1 CHART 1 */

  chartSpecialty =  this.createHorizontalStackedChart();

  chartSearchChannel = this.createChartSearchChannel();

  /* SECTION 2 CHARTS */
  section2ELearningChart = this.createHorizontalBarChart([75, 68, 49, 48, 14], ['Scientific topics', 'Focused on patients', 'Clinical cases with products', 'Focused on benefits / mode action / product dosage', 'Focused on commercial part / administrative / finnancial'], 90, true);

  /* SECTION 3 CHARTS 1 */
  section3PainChart = this.createHorizontalBarChart([21, 14, 13], ['Efficacy', 'Product safety', 'Pain intensity'], 45);

  section3FeverChart = this.createHorizontalBarChart([20, 19, 13], ['Active ingredient', 'Product safety', 'Scientific proof of benefits'], 45);

  section3FeverChildrenChart = this.createHorizontalBarChart([39, 39, 14], ['Safety', 'Efficacy', 'Flavor'], 45);

  section3AllergyChart = this.createHorizontalBarChart([18, 18, 18], ['Active ingredient', 'Scientific proof of benefits', 'Product safety'], 45);

  section3SupplementsChart = this.createHorizontalBarChart([19, 11, 10], ['Efficacy', 'Safety', 'Prior experience with the brand'], 45);

  section3ProbioticsChart = this.createHorizontalBarChart([22, 15, 15], ['Scientific proof of benefits', 'Active ingredient', 'Product safety'], 45);

  /* SECTION 3 CHARTS 2 */
  section3PainChart2 = this.createHorizontalBarChart([6, 5, 4], ['Pain location / pharmaceutical form of the drug', 'Price / prior patient experience with the brand', 'Patient preference / brand'], 20);

  section3FeverChart2 = this.createHorizontalBarChart([7, 6, 4], ['Trust in pharmaceutical company', 'Price', 'Samples/frequency of contact with representative'], 20);

  section3FeverChildrenChart2 = this.createHorizontalBarChart([8, 1], ['Pharmaceutical form (drops / liquid solution)', 'Price'], 20);

  section3AllergyChart2 = this.createHorizontalBarChart([7, 6, 4], ['Trust in pharmaceutical company / drug form', 'Price', 'Frequency of contact with representative / samples'], 20);

  section3SupplementsChart2 = this.createHorizontalBarChart([8, 7, 4], ['Prior experience with the brand / dosage', 'Price / form of the supplement', 'Frequency of contact with representative / samples'], 20);

  section3ProbioticsChart2 = this.createHorizontalBarChart([6, 5, 3], ['Dosage / frequency of contact with representative / form of probiotic / patients prior experience with the brand / resistance', 'Price / thermoresistance / brand', 'Samples / patient preference'], 20);

  /* SECTION 4 CHARTS */
  section4AllergyChart1 = this.createHorizontalBarChart([60, 15, 5], ['Causes more side effects (drowsiness, lack of coordination, weight gain, tiredness)', 'Crosses the blood-brain barrier (BBB)', 'More daily doses (3-4 times a day)']);

  section4AallergyChart2 = this.createHorizontalBarChart([32, 10, 9], ['Causes less side effects (less drowsiness)', 'Higher efficacy', 'Does not cross the blood-brain barrier (BBB)']);

  section4VitaminCChart = this.createHorizontalBarChart([10, 10, 9], ['Deficit in lab results', 'Flu, cold', 'Vitamin C deficiency']);

  section4VitaminDChart = this.createHorizontalBarChart([53, 17, 11], ['Vitamin D deficiency', 'Osteoporosis/osteopenia', 'Age group']);

  section4StressChart = this.createHorizontalBarChart([32, 10, 6], ['No nutrient', 'Passiflora incarnata (plant)', 'Vitamin D'], 80);

  section4SleepChart = this.createHorizontalBarChart([33, 13, 11], ['No nutrient', 'Melatonin (hormone)', 'Zolpidem tartrate (active ingredient)']);

  section2ChartVertical = this.createVerticalBarChart([66, 18, 8, 6], ['Prefer using VÍDEO', 'TEXT', 'PRINTED MATERIALS', 'INFOGRAPHICS'], 200, true);

  constructor() {}

  ngOnInit(): void {}

  openTooltip1() {
    this.recTooltip1 = !this.recTooltip1;
  }

  openTooltip2(){
    this.recTooltip2 = !this.recTooltip2;
  }

  openSection2TooltipTopic() {
    this.section2TooltipTopic = !this.section2TooltipTopic;
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

  openSection2TooltipElearn() {
    this.section2TooltipElearn = !this.section2TooltipElearn;
  }

  openSection4Tooltip1(){
    this.section4Tooltip1 = !this.section4Tooltip1;
  }

  openSection4Tooltip2(){
    this.section4Tooltip2 = !this.section4Tooltip2;
  }

  openSection4Tooltip3(){
    this.section4Tooltip3 = !this.section4Tooltip3;
  }

  openSection4Tooltip4(){
    this.section4Tooltip4 = !this.section4Tooltip4;
  }

  openSection4Tooltip5(){
    this.section4Tooltip5 = !this.section4Tooltip5;
  }

  openSection4Tooltip6(){
    this.section4Tooltip6 = !this.section4Tooltip6;
  }

  openSection4Tooltip7(){
    this.section4Tooltip7 = !this.section4Tooltip7;
  }

  toggleCollapsed1() {
    this.isCollapsed = !this.isCollapsed;

    if (!this.isCollapsed)
      this.section2ChartVertical = this.createVerticalBarChart([66, 18, 8, 6], ['Prefer using VÍDEO', 'TEXT', 'PRINTED MATERIALS', 'INFOGRAPHICS'], 200, true);
  }

  toggleCollapsed4() {
    this.isCollapsed4 = !this.isCollapsed4;

    if (!this.isCollapsed4)
      this.section2ELearningChart = this.createHorizontalBarChart([75, 68, 49, 48, 14], ['Scientific topics', 'Focused on patients', 'Clinical cases with products', 'Focused on benefits / mode action / product dosage', 'Focused on commercial part / administrative / finnancial'], 90, true);
  }

  toggleCollapsed10() {
    this.isCollapsed10 = !this.isCollapsed10;

    if (!this.isCollapsed10) {
      /* SECTION 3 CHARTS 1 */
      this.section3PainChart = this.createHorizontalBarChart([53, 50], ['vitamin C', 'multivitamin'], 45);

      this.section3FeverChart = this.createHorizontalBarChart([20, 19, 13], ['Active ingredient', 'Product safety', 'Scientific proof of benefits'], 45);

      this.section3FeverChildrenChart = this.createHorizontalBarChart([39, 39, 14], ['Safety', 'Efficacy', 'Flavor'], 45);

      this.section3AllergyChart = this.createHorizontalBarChart([18, 18, 18], ['Active ingredient', 'Scientific proof of benefits', 'Product safety'], 45);

      this.section3SupplementsChart = this.createHorizontalBarChart([19, 11, 10], ['Efficacy', 'Safety', 'Prior experience with the brand'], 45);

      this.section3ProbioticsChart = this.createHorizontalBarChart([22, 15, 15], ['Scientific proof of benefits', 'Active ingredient', 'Product safety'], 45);
    }
  }

  toggleCollapsed11() {
    this.isCollapsed11 = !this.isCollapsed11;

    if (!this.isCollapsed11) {
      /* SECTION 3 CHARTS 2 */
      this.section3PainChart2 = this.createHorizontalBarChart([6, 5, 4], ['Pain location / pharmaceutical form of the drug', 'Price / prior patient experience with the brand', 'Patient preference / brand'], 20);

      this.section3FeverChart2 = this.createHorizontalBarChart([7, 6, 4], ['Trust in pharmaceutical company', 'Price', 'Samples/frequency of contact with representative'], 20);

      this.section3FeverChildrenChart2 = this.createHorizontalBarChart([8, 1], ['Pharmaceutical form (drops / liquid solution)', 'Price'], 20);

      this.section3AllergyChart2 = this.createHorizontalBarChart([7, 6, 4], ['Trust in pharmaceutical company / drug form', 'Price', 'Frequency of contact with representative / samples'], 20);

      this.section3SupplementsChart2 = this.createHorizontalBarChart([8, 7, 4], ['Prior experience with the brand / dosage', 'Price / form of the supplement', 'Frequency of contact with representative / samples'], 20);

      this.section3ProbioticsChart2 = this.createHorizontalBarChart([6, 5, 3], ['Dosage / frequency of contact with representative / form of probiotic / patients prior experience with the brand / resistance', 'Price / thermoresistance / brand', 'Samples / patient preference'], 20);
    }
  }

}
