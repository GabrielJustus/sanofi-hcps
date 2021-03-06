import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-pharmacists',
  templateUrl: './pharmacists.component.html',
  styleUrls: [
    './pharmacists.component.css',
    '../../animations.css',
    '../../tabs.css',
  ],
})
export class PharmacistsComponent implements OnInit {
  isCollapsed = true;
  isCollapsed2 = true;
  isCollapsed3 = true;
  isCollapsed4 = true;
  isCollapsed5 = true;
  isCollapsed6 = true;

  isCollapsed10 = true;
  isCollapsed11 = true;
  isCollapsed12 = true;
  isCollapsed13 = true;

  recTooltip1 = false;
  recTooltip2 = false;

  section2TooltipTopic = false;
  section2TooltipTopic2 = false;
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

  tooltipOpen = false;

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
  public doughnutChartData: MultiDataSet = [[60, 30, 32]];
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
    'INTERNET is the\nmost widely\nused resource in\ntheir searches\n(63%)',
    'Video lessons\n(10%)',
    'scientific articles\nand studies(8%)',
    'CRF - Regional\nPharmaceutical Council (8%)',
  ];
  public doughnutChartData3: MultiDataSet = [[62, 10, 8, 8]];
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

  createHorizontalBarChart(data, labels, max = 65, colorByPoint = false) {
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
          colors: ['#023866', '#023866', '#023866', '#41C1F2', '#41C1F2'],
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
          'Networks ABRAFARMA',
          'FEBRAFAR member',
          'Other',
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
          data: [0, 0, 0],
        },
        {
          name: '',
          showInLegend: false,
          type: 'column',
          data: [11, 11, 10],
        },
        {
          name: '',
          showInLegend: false,
          type: 'column',
          data: [10, 10, 10],
        },
        {
          showInLegend: false,
          name: '',
          type: 'column',
          data: [18, 20, 22],
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
            ['', 4.7],
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
            ['', 3.85],
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
            ['', 22],
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
            ['', 22],
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
  chartSearchChannel2 = this.createChartSearchChannel2();
  chartSearchChannel3 = this.createChartSearchChannel3();
  chartSearchChannel4 = this.createChartSearchChannel4();

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
    [
      'WhatsApp',
      'Email',
      'In-person visit',
    ],
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
    [
      'Efficacy',
      'Trust in pharmaceutical company',
      'Safety',
    ],
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

  /* SECTION 3 CHARTS 1 */
  section3PainChart = this.createHorizontalBarChart(
    [16, 16, 15],
    ['Pain intensity', 'Efficacy', 'Pain location/product safety'],
    45
  );

  section3FeverChart = this.createHorizontalBarChart(
    [19, 17, 16],
    ['Active ingredient', 'Product safety', 'Scientific proof of benefits'],
    45
  );

  section3FeverChildrenChart = this.createHorizontalBarChart(
    [63, 33],
    ['Safety', 'Efficacy'],
    80
  );

  section3AllergyChart = this.createHorizontalBarChart(
    [17, 13, 13, 13],
    ['Product safety', 'Scientific proof of benefits', 'Active ingredient', 'Trust in pharmaceutical company'],
    45
  );

  section3SupplementsChart = this.createHorizontalBarChart(
    [16, 16, 12],
    ['Active ingredient', 'Scientific proof of benefits', 'Dosage/product safety'],
    45
  );

  section3ProbioticsChart = this.createHorizontalBarChart(
    [16, 15, 14],
    ['Product safety', 'Scientific proof of benefits', 'Dosage'],
    45
  );

  section3LaxativesChart = this.createHorizontalBarChart(
    [17, 14, 13],
    ['Active ingredient', 'Dosage', 'Product safety'],
    45
  );

  /* SECTION 3 CHARTS 2 */
  section3PainChart2 = this.createHorizontalBarChart(
    [ 7, 7, 6],
    [
      'Pharmaceutical form', 'Price', 'Brand'
    ],
    30
  );

  section3FeverChart2 = this.createHorizontalBarChart(
    [ 7, 6, 5],
    [
       'Pharmaceutical form', 'Price/prior experience with brand', 'Samples/frequency of contact'
    ],
    30
  );

  section3FeverChildrenChart2 = this.createHorizontalBarChart(
    [],
    [],
    30
  );

  section3AllergyChart2 = this.createHorizontalBarChart(
    [7, 6, 6],
    [
      'Prior experience with brand/price', 'Frequency of contact with representative', `Samples`
    ],
    30
  );

  section3SupplementsChart2 = this.createHorizontalBarChart(
    [ 7, 6, 5],
    [
      'Frequency of contact with representative', 'Prior experience with the brand', 'Samples/price'
    ],
    30
  );

  section3ProbioticsChart2 = this.createHorizontalBarChart(
    [9, 7, 5],
    [
      'Pharmaceutical form', 'Prior experience with the brand', 'Price', 'Frequency of contact with representative/Samples'
    ],
    30
  );

  section3LaxativesChart2 = this.createHorizontalBarChart(
    [9, 8, 5],
    ['Pharmaceutical form', 'Trust in pharmaceutical company', 'Frequency of contact/samples'],
    30
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
    [48, 27, 18],
    ['Prefer using V??DEO', 'TEXT', 'PRINTED MATERIALS'],
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

  openSection2TooltipTopic2() {
    this.section2TooltipTopic2 = !this.section2TooltipTopic2;
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
        [48, 27, 18],
        ['Prefer using V??DEO', 'TEXT', 'PRINTED MATERIALS'],
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

    if (!this.isCollapsed5){
      this.section2RelationshipChart = this.createHorizontalBarChart(
        [46, 25, 16],
        [
          'WhatsApp',
          'Email',
          'In-person visit',
        ],
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

  toggleCollapsed12() {
    this.isCollapsed12 = !this.isCollapsed12;

  }

  toggleCollapsed13() {
    this.isCollapsed13 = !this.isCollapsed13;

  }

  toggleCollapsed11() {
    this.isCollapsed11 = !this.isCollapsed11;


  }

  toggleTooltip() {
    this.tooltipOpen = !this.tooltipOpen;
  }
}
