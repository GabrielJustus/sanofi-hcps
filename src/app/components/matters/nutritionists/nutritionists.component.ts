import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-nutritionists',
  templateUrl: './nutritionists.component.html',
  styleUrls: [
    './nutritionists.component.css',
    '../../animations.css',
    '../../tabs.css',
  ],
})
export class NutritionistsComponent implements OnInit {
  isCollapsed = true;
  isCollapsed2 = true;
  isCollapsed3 = true;
  isCollapsed4 = true;
  isCollapsed5 = true;
  isCollapsed6 = true;

  isCollapsed10 = true;
  isCollapsed11 = true;
  isCollapsed12 = true;

  recTooltip1 = false;
  recTooltip2 = false;

  section2TooltipTopic = false;
  section2TooltipElearn = false;

  section1TooltipFormat = false;

  section1TooltipSearch = false;
  section1TooltipSearch2 = false;

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
  public doughnutChartData: MultiDataSet = [[30, 15, 15]];
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

  public doughnutChartLabels5: Label[] = ['Calcium and\n Vitamin C (28%)', 'Multivitamin (35%)', 'Vitamin D (50%)'];
  public doughnutChartData5: MultiDataSet = [[28, 35, 50]];
  public doughnutChartType5: ChartType = 'doughnut';
  public doughnutChartTypeColors5: any[] = [
    {
      backgroundColor: ['#023866', '#006EB6', '#41C1F2', '#94D0F2'],
    },
  ];
  public doughnutChartOpts5: ChartOptions = {
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

  public doughnutChartLabels3: Label[] = [
    'INTERNET is the\nmost widely\nused resource in\ntheir searches\n(52%)',
    'scientific\nstudies and articles (37%)',
    'PubMed\n(23%)',
  ];
  public doughnutChartData3: MultiDataSet = [[30, 15, 15]];
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
  public doughnutChartLabels32: Label[] = [
    'Educational\ncontent (84%)',
    'Receiving\nSamples (81%)',
    'Announcement\nof events (54%)',
  ];
  public doughnutChartData32: MultiDataSet = [[84, 81, 54]];
  public doughnutChartType32: ChartType = 'doughnut';
  public doughnutChartTypeColors32: any[] = [
    {
      backgroundColor: ['#023866', '#006EB6', '#41C1F2', '#DADADA'],
    },
  ];
  public doughnutChartOpts32: ChartOptions = {
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
      labels: false,
    },
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
    'Foco nos benef??cios',
    'Foco na parte comercial',
  ];

  activeTab = 1;
  activeSubTab1 = 1;
  activeSubTab2 = 1;
  activeSubTab3 = 1;


  createHorizontalBarChart(data, labels, max = 65, colorByPoint = true) {
    return new Chart({
      chart: {
        type: 'bar',
        backgroundColor: 'transparent',
      },
      title: {
        text: '',
      },
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
              fontSize: '12px',
              fontFamily: 'Lato',
              textOutline: 'none',
            },
            borderWidth: 0,
            borderColor: '#023866',
          },
        },
        bar: {
          colorByPoint: colorByPoint,
          colors: ['#023866', '#0c4f7d', '#176695', '#217dac', '#2c93c3' , '#37aadb' , '#41C1F2'],
        },
      },
      legend: {
        enabled: false,
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
            width: 350,
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

  createHorizontalStackedChart() {
    return new Chart({
      chart: {
        type: 'bar',
      },
      colors: ['#94D0F2', '#41C1F2', '#006EB6', '#023866'],
      title: {
        text: '',
      },
      xAxis: {
        title: {
          text: null,
        },
        categories: [
          'Pediatricians',
          'General practitioners',
          'Otolaryngologists',
          'Allergists',
        ],
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
        max: 70,
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
            enabled: true,
          },
        },
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: '',
          showInLegend: false,
          type: 'column',
          data: [10, 10, 8, 2],
        },
        {
          name: '',
          showInLegend: false,
          type: 'column',
          data: [8, 8, 8, 6],
        },
        {
          name: '',
          showInLegend: false,
          type: 'column',
          data: [12, 12, 10, 6],
        },
        {
          showInLegend: false,
          name: '',
          type: 'column',
          data: [40, 40, 34, 27],
        },
        // {
        //   name: '',
        //   showInLegend: false,
        //   type: 'column',
        //   data: [26, 6]
        // },
      ],
    });
  }

  createChartSearchChannel() {
    return new Chart({
      chart: {
        plotBorderWidth: 0,
        plotShadow: false,
        backgroundColor: '',
      },
      colors: ['#003866', '#F1EEEE'],
      title: {
        text: '',
        align: 'center',
        verticalAlign: 'middle',
        y: 100,
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      accessibility: {
        point: {
          valueSuffix: '%',
        },
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'white',
            },
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '75%'],
          size: '150%',
        },
      },
      series: [
        {
          type: 'pie',
          name: '',
          innerSize: '90%',
          data: [
            ['', 8.13],
            {
              name: 'Other',
              y: 4,
              dataLabels: {
                enabled: false,
              },
            },
          ],
        },
      ],
    });
  }

  createChartSearchChannel8() {
    return new Chart({
      chart: {
        plotBorderWidth: 0,
        plotShadow: false,
        backgroundColor: '',
      },
      colors: ['#003866', '#F1EEEE'],
      title: {
        text: '',
        align: 'center',
        verticalAlign: 'middle',
        y: 100,
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      accessibility: {
        point: {
          valueSuffix: '%',
        },
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'white',
            },
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '75%'],
          size: '150%',
        },
      },
      series: [
        {
          type: 'pie',
          name: '',
          innerSize: '90%',
          data: [
            ['', 8.13],
            {
              name: 'Other',
              y: 4,
              dataLabels: {
                enabled: false,
              },
            },
          ],
        },
      ],
    });
  }

  createChartSearchChannel2() {
    return new Chart({
      chart: {
        plotBorderWidth: 0,
        plotShadow: false,
        backgroundColor: '',
      },
      colors: ['#003866', '#F1EEEE'],
      title: {
        text: '',
        align: 'center',
        verticalAlign: 'middle',
        y: 100,
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      accessibility: {
        point: {
          valueSuffix: '%',
        },
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'white',
            },
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '75%'],
          size: '150%',
        },
      },
      series: [
        {
          type: 'pie',
          name: '',
          innerSize: '90%',
          data: [
            ['', 6],
            {
              name: 'Other',
              y: 4,
              dataLabels: {
                enabled: false,
              },
            },
          ],
        },
      ],
    });
  }

  createChartSearchChannel3() {
    return new Chart({
      chart: {
        plotBorderWidth: 0,
        plotShadow: false,
        backgroundColor: '',
      },
      colors: ['#003866', '#F1EEEE'],
      title: {
        text: '',
        align: 'center',
        verticalAlign: 'middle',
        y: 100,
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      accessibility: {
        point: {
          valueSuffix: '%',
        },
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'white',
            },
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '75%'],
          size: '150%',
        },
      },
      series: [
        {
          type: 'pie',
          name: '',
          innerSize: '90%',
          data: [
            ['', 10.3],
            {
              name: 'Other',
              y: 4,
              dataLabels: {
                enabled: false,
              },
            },
          ],
        },
      ],
    });
  }

  createChartSearchChannel4() {
    return new Chart({
      chart: {
        plotBorderWidth: 0,
        plotShadow: false,
        backgroundColor: '',
      },
      colors: ['#003866', '#F1EEEE'],
      title: {
        text: '',
        align: 'center',
        verticalAlign: 'middle',
        y: 100,
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      accessibility: {
        point: {
          valueSuffix: '%',
        },
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'white',
            },
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '75%'],
          size: '150%',
        },
      },
      series: [
        {
          type: 'pie',
          name: '',
          innerSize: '90%',
          data: [
            ['', 1.88],
            {
              name: 'Other',
              y: 4,
              dataLabels: {
                enabled: false,
              },
            },
          ],
        },
      ],
    });
  }

  createChartSearchChannel10() {
    return new Chart({
      chart: {
        plotBorderWidth: 0,
        plotShadow: false,
        backgroundColor: '',
      },
      colors: ['#003866', '#F1EEEE'],
      title: {
        text: '',
        align: 'center',
        verticalAlign: 'middle',
        y: 100,
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      accessibility: {
        point: {
          valueSuffix: '%',
        },
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'white',
            },
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '75%'],
          size: '150%',
        },
      },
      series: [
        {
          type: 'pie',
          name: '',
          innerSize: '90%',
          data: [
            ['', 1.88],
            {
              name: 'Other',
              y: 4,
              dataLabels: {
                enabled: false,
              },
            },
          ],
        },
      ],
    });
  }


  createChartSearchChannel11() {
    return new Chart({
      chart: {
        plotBorderWidth: 0,
        plotShadow: false,
        backgroundColor: '',
      },
      colors: ['#003866', '#F1EEEE'],
      title: {
        text: '',
        align: 'center',
        verticalAlign: 'middle',
        y: 100,
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      accessibility: {
        point: {
          valueSuffix: '%',
        },
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'white',
            },
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '75%'],
          size: '150%',
        },
      },
      series: [
        {
          type: 'pie',
          name: '',
          innerSize: '90%',
          data: [
            ['', 1.88],
            {
              name: 'Other',
              y: 4,
              dataLabels: {
                enabled: false,
              },
            },
          ],
        },
      ],
    });
  }

  createVerticalBarChart(data, labels, max = 100, colorByPoint = false) {
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

  /* SECTION 1 CHART 1 */

  chartSpecialty = this.createHorizontalStackedChart();

  chartSearchChannel = this.createChartSearchChannel();
  chartSearchChannel8 = this.createChartSearchChannel8();
  chartSearchChannel2 = this.createChartSearchChannel2();
  chartSearchChannel3 = this.createChartSearchChannel3();
  chartSearchChannel4 = this.createChartSearchChannel4();
  chartSearchChannel10 = this.createChartSearchChannel10();
  chartSearchChannel11 = this.createChartSearchChannel11();

  /* SECTION 2 CHARTS */
  section2ELearningChart = this.createHorizontalBarChart(
    [90, 78, 75],
    [
      'addressing content focused on patients and diseases (90%)',
      'scientific content (78%)',
      'content focused on benefits/mode of action/ product dosage (75%)',
    ],
    90,
    true
  );
  section2RelationshipChart = this.createHorizontalBarChart(
    [46, 25, 16],
    ['WhatsApp', 'Email', 'In-person visit'],
    90,
    true
  );

  section2GeneralChart = this.createHorizontalBarChart(
    [30, 53, 27, 60, 23, 20, 17],
    [
      'non hydrolyzed collagen (type II) for articular health',
      'hydrolyzed collagen (type I) for the skin and 43% for nails and hair',
      'Protein (whey protein) for muscle strengthening;',
      'Vitamin D for bone health',
      'Vitamin B for stress',
      'Passiflora incarnata for sleep improvement',
      'Caffeine for tiredness',
    ],
    90,
    true
  );

  mostImportantChart = this.createHorizontalBarChart(
    [19, 13, 12],
    ['Efficacy', 'Trust in pharmaceutical company', 'Safety'],
    90,
    true
  );

  mostImportantChart2 = this.createHorizontalBarChart(
    [27, 13, 11],
    [
      'Scientific proof of benefits',
      'Product safety/trust in pharmaceutical company',
      'Active ingredient',
    ],
    90,
    true
  );

  leastImportantChart2 = this.createHorizontalBarChart(
    [8, 6, 5],
    [
      'Prior experience with the brand',
      'Price/dosage/frequency of contact with representative',
      'Pharmaceutical form/samples',
    ],
    90,
    true
  );

  leastImportantChart = this.createHorizontalBarChart(
    [5, 4, 3],
    [
      'Resistance to antibiotics/brand',
      'Prior patient experience with the brand/samples/thermoresistance/frequency of contact with representative',
      'Patient preference',
    ],
    90,
    true
  );

  section2RelationshipChart2 = this.createHorizontalBarChart(
    [35, 32, 16],
    [
      'By another nutritionist',
      'By the representative by digital means',
      'By the representative in-person',
    ],
    90,
    true
  );

  section2RelationshipChart3 = this.createHorizontalBarChart(
    [60, 23, 17],
    [
      'Vitamin deficiency',
      'Immunity improvement/Iron-deficiency anemia',
      'Quality of life improvement (insomnia, loss of appetite, losing weight)',
    ],
    90,
    true
  );

  /* SECTION 3 CHARTS 1 */
  section3LaxativeChart = this.createHorizontalBarChart(
    [21, 14, 13],
    ['Efficacy', 'Product safety', 'Pain intensity'],
    45
  );

  section3LaxativeChart2 = this.createHorizontalBarChart(
    [20, 19, 13],
    ['Active ingredient', 'Product safety', 'Scientific proof of benefits'],
    45
  );

  section3SupplementsChart = this.createHorizontalBarChart(
    [39, 39, 14],
    ['Safety', 'Efficacy', 'Flavor'],
    45
  );

  section3SupplementsChart2 = this.createHorizontalBarChart(
    [18, 18, 18],
    ['Active ingredient', 'Scientific proof of benefits', 'Product safety'],
    45
  );


  section3ProbioticsChart = this.createHorizontalBarChart(
    [22, 15, 15],
    ['Scientific proof of benefits', 'Active ingredient', 'Product safety'],
    45
  );

  /* SECTION 3 CHARTS 2 */
  section3PainChart2 = this.createHorizontalBarChart(
    [6, 5, 4],
    [
      'Pain location / pharmaceutical form of the drug',
      'Price / prior patient experience with the brand',
      'Patient preference / brand',
    ],
    20
  );

  section3FeverChart2 = this.createHorizontalBarChart(
    [7, 6, 4],
    [
      'Trust in pharmaceutical company',
      'Price',
      'Samples/frequency of contact with representative',
    ],
    20
  );

  section3FeverChildrenChart2 = this.createHorizontalBarChart(
    [8, 1],
    ['Pharmaceutical form (drops / liquid solution)', 'Price'],
    20
  );

  section3AllergyChart2 = this.createHorizontalBarChart(
    [7, 6, 4],
    [
      'Trust in pharmaceutical company / drug form',
      'Price',
      'Frequency of contact with representative / samples',
    ],
    20
  );

  section3ProbioticsChart2 = this.createHorizontalBarChart(
    [6, 5, 3],
    [
      'Dosage / frequency of contact with representative / form of probiotic / patients prior experience with the brand / resistance',
      'Price / thermoresistance / brand',
      'Samples / patient preference',
    ],
    45
  );

  /* SECTION 4 CHARTS */
  section4AllergyChart1 = this.createHorizontalBarChart(
    [60, 15, 5],
    [
      'Causes more side effects (drowsiness, lack of coordination, weight gain, tiredness)',
      'Crosses the blood-brain barrier (BBB)',
      'More daily doses (3-4 times a day)',
    ]
  );

  section4AallergyChart2 = this.createHorizontalBarChart(
    [32, 10, 9],
    [
      'Causes less side effects (less drowsiness)',
      'Higher efficacy',
      'Does not cross the blood-brain barrier (BBB)',
    ]
  );

  section4VitaminCChart = this.createHorizontalBarChart(
    [10, 10, 9],
    ['Deficit in lab results', 'Flu, cold', 'Vitamin C deficiency']
  );

  section4VitaminDChart = this.createHorizontalBarChart(
    [53, 17, 11],
    ['Vitamin D deficiency', 'Osteoporosis/osteopenia', 'Age group']
  );

  section4StressChart = this.createHorizontalBarChart(
    [32, 10, 6],
    ['No nutrient', 'Passiflora incarnata (plant)', 'Vitamin D'],
    80
  );

  section4SleepChart = this.createHorizontalBarChart(
    [33, 13, 11],
    [
      'No nutrient',
      'Melatonin (hormone)',
      'Zolpidem tartrate (active ingredient)',
    ]
  );
  section2ChartVertical = this.createVerticalBarChart(
    [42, 30, 7, 3],
    ['VIDEO', 'TEXT', 'PODCASTS/ AUDIO', 'INFOGRAPHICS'],
    200,
    true
  );

  section2ChartVertical2 = this.createVerticalBarChart(
    [24, 19, 14],
    [
      'DRI ??? Dietary \nReference Intakes',
      'SBD ??? Sociedade \nBrasileira de Diabetes',
      'SBAN ??? Sociedade \nBrasileira de Alimenta????o e Nutri????o',
    ],
    200,
    true
  );

  section2ChartVertical20 = this.createVerticalBarChart(
    [33, 17, 10],
    [
      'Caffeine',
      'None',
      'Maltodextrin',
    ],
    200,
    true
  );

  constructor() {}

  ngOnInit(): void {}

  openTooltip1() {
    this.recTooltip1 = !this.recTooltip1;
  }

  openTooltip2() {
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

  openSection1TooltipSearch2() {
    this.section1TooltipSearch2 = !this.section1TooltipSearch2;
  }

  openSection2TooltipElearn() {
    this.section2TooltipElearn = !this.section2TooltipElearn;
  }

  openSection4Tooltip1() {
    this.section4Tooltip1 = !this.section4Tooltip1;
  }

  openSection4Tooltip2() {
    this.section4Tooltip2 = !this.section4Tooltip2;
  }

  openSection4Tooltip3() {
    this.section4Tooltip3 = !this.section4Tooltip3;
  }

  openSection4Tooltip4() {
    this.section4Tooltip4 = !this.section4Tooltip4;
  }

  openSection4Tooltip5() {
    this.section4Tooltip5 = !this.section4Tooltip5;
  }

  openSection4Tooltip6() {
    this.section4Tooltip6 = !this.section4Tooltip6;
  }

  openSection4Tooltip7() {
    this.section4Tooltip7 = !this.section4Tooltip7;
  }

  toggleCollapsed1() {
    this.isCollapsed = !this.isCollapsed;

    if (!this.isCollapsed)
      this.section2ChartVertical = this.createVerticalBarChart(
        [42, 30, 7, 3],
        ['VIDEO', 'TEXT', 'PRINTED MATERIALS', 'INFOGRAPHICS'],
        200,
        true
      );
  }

  toggleCollapsed4() {
    this.isCollapsed4 = !this.isCollapsed4;

    if (!this.isCollapsed4)
      this.section2ELearningChart = this.createHorizontalBarChart(
        [90, 78, 75],
        [
          'addressing content focused on patients and diseases (90%)',
          'scientific content (78%)',
          'content focused on benefits/mode of action/ product dosage (75%)',
        ],
        90,
        true
      );
  }

  toggleCollapsed5() {
    this.isCollapsed5 = !this.isCollapsed5;

    if (!this.isCollapsed5) {
      this.section2RelationshipChart = this.createHorizontalBarChart(
        [46, 25, 16],
        ['WhatsApp', 'Email', 'In-person visit'],
        90,
        true
      );

      this.section2RelationshipChart2 = this.createHorizontalBarChart(
        [35, 32, 16],
        [
          'By another nutritionist',
          'By the representative by digital means',
          'By the representative in-person',
        ],
        90,
        true
      );
    }
  }

  toggleCollapsed10() {
    this.isCollapsed10 = !this.isCollapsed10;
  }

  toggleCollapsed11() {
    this.isCollapsed11 = !this.isCollapsed11;

    if (!this.isCollapsed11) {
      /* SECTION 3 CHARTS 1 */
      this.section3ProbioticsChart = this.createHorizontalBarChart([19, 13, 12], ['Efficacy', 'Trust in pharmaceutical company', 'Safety'], 100);

      this.section3SupplementsChart = this.createHorizontalBarChart([27, 13, 11], ['Scientif proof of benefits', 'Product safety/trust in pharmaceutical company', 'Active ingredient'], 30);


    }
  }

  toggleCollapsed12() {
    this.isCollapsed12 = !this.isCollapsed12;

    if (!this.isCollapsed12) {
      /* SECTION 3 CHARTS 2 */
      this.section3ProbioticsChart2 = this.createHorizontalBarChart([5, 4, 3], ['Resistance to antibiotics/brand', 'prior patient experience with the brand', 'Patient preference'], 100);

      this.section3SupplementsChart2 = this.createHorizontalBarChart([8, 6, 5], ['Prior experience with the brand', 'Price/dosage/frequency of contact with representative', 'Pharmaceutical forms/samples'], 30);
    }
  }

  public doughnutChartLabels4: Label[] = [
    'Dysbiosis (35%)',
    'Chronic constipation (31%)',
    'Bowel disorder (27%)',
    'Most (38%) prefer\n compounded formulations.'
  ];
  public doughnutChartData4: MultiDataSet = [[35, 31, 27, 38]];
  public doughnutChartType4: ChartType = 'doughnut';
  public doughnutChartTypeColors4: any[] = [
    {
      backgroundColor: ['#41C1F0', '#93D1F2', '#003866', '#dadada'],
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
        outsidePadding: 0,
        textMargin: 5,
      },
    },
  };
}
