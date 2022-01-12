import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-clerks-section-content-tabs',
  templateUrl: './section-content-tabs.component.html',
  styleUrls: ['./section-content-tabs.component.css', '../clerks.component.css', '../../../animations.css', '../../../tabs.css']
})
export class SectionContentTabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isCollapsed6 = true;
  isCollapsed7 = true;
  isCollapsed8 = true;
  
  isCollapsed9 = true;
  isCollapsed10 = true;
  isCollapsed11 = true;

  activeTab = 1;
  activeTab2 = 1;

  section1TooltipClerks = false;
  tab1TooltipClerks = false;

  tabFever1TooltipClerks = false;
  tabFever2TooltipClerks = false;

  tabSupplementsTooltipClerks = false;

  openSection1TooltipClerks() {
    this.section1TooltipClerks = !this.section1TooltipClerks;
  }

  openTab1TooltipClerks() {
    this.tab1TooltipClerks = !this.tab1TooltipClerks;
  }

  openTabFever1TooltipClerks() {
    this.tabFever1TooltipClerks = !this.tabFever1TooltipClerks;
  }

  openTabFever2TooltipClerks() {
    this.tabFever2TooltipClerks = !this.tabFever2TooltipClerks;
  }

  openTabSupplementsTooltipClerks() {
    this.tabSupplementsTooltipClerks = !this.tabSupplementsTooltipClerks;
  }

  chartClarksRecommendation = this.createChartClerksRecommendation();

  createChartClerksRecommendation(){
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
          ['', 30],
          {
            name: '',
            y: 70,
            dataLabels: {
              enabled: false
            }
          }
        ]
      }]
    });
  }

  chartClarksRecommendationTab1 = this.createChartClerksRecommendationTab1();

  createChartClerksRecommendationTab1(){
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
          ['', 61],
          {
            name: '',
            y: 39,
            dataLabels: {
              enabled: false
            }
          }
        ]
      }]
    });
  }

  chartClarksRecommendationTab2 = this.createChartClerksRecommendationTab2();

  createChartClerksRecommendationTab2(){
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
          ['', 71],
          {
            name: '',
            y: 29,
            dataLabels: {
              enabled: false
            }
          }
        ]
      }]
    });
  }

  chartClarksRecommendationTab3 = this.createChartClerksRecommendationTab3();

  createChartClerksRecommendationTab3(){
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
          ['', 70],
          {
            name: '',
            y: 30,
            dataLabels: {
              enabled: false
            }
          }
        ]
      }]
    });
  }

  chartClarksRecommendationSupplementsTab = this.createChartClerksRecommendationTab1();


  chartClarksRecommendationProbioticsTab = this.createChartClarksRecommendationProbioticsTab();

  chartClarksRecommendationImmunityTab = this.createChartClarksRecommendationProbioticsTab();

  chartClarksRecommendationStressTab = this.createChartClarksRecommendationStressTab();

  chartClarksRecommendationFatigueTab = this.createChartClarksRecommendationStressTab();

  chartClarksRecommendationMuscleTab = this.createChartClarksRecommendationStressTab();

  chartClarksRecommendationSleepTab = this.createChartClarksRecommendationSleepTab();

  chartClarksRecommendationArticularTab = this.createChartClarksRecommendationArticularTab();

  chartClarksRecommendationBoneTab = this.createChartClarksRecommendationBoneTab();

  chartClarksRecommendationEnergyTab = this.createChartClarksRecommendationEnergyTab();

  createChartClarksRecommendationProbioticsTab(){
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
          ['', 52],
          {
            name: '',
            y: 48,
            dataLabels: {
              enabled: false
            }
          }
        ]
      }]
    });
  }

  createChartClarksRecommendationStressTab(){
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
          ['', 26],
          {
            name: '',
            y: 74,
            dataLabels: {
              enabled: false
            }
          }
        ]
      }]
    });
  }

  createChartClarksRecommendationSleepTab(){
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
          ['', 19],
          {
            name: '',
            y: 81,
            dataLabels: {
              enabled: false
            }
          }
        ]
      }]
    });
  }

  createChartClarksRecommendationArticularTab(){
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
          ['', 23],
          {
            name: '',
            y: 77,
            dataLabels: {
              enabled: false
            }
          }
        ]
      }]
    });
  }

  createChartClarksRecommendationBoneTab(){
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
          ['', 55],
          {
            name: '',
            y: 45,
            dataLabels: {
              enabled: false
            }
          }
        ]
      }]
    });
  }

  createChartClarksRecommendationEnergyTab(){
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
          ['', 13],
          {
            name: '',
            y: 87,
            dataLabels: {
              enabled: false
            }
          }
        ]
      }]
    });
  }

  toggleCollapsed7() {
    this.isCollapsed7 = !this.isCollapsed7;

    if (!this.isCollapsed7) {
      /* SECTION 3 CHARTS 1 */
      this.section3PainChart = this.createHorizontalBarChart([19, 18, 11], ['Pain intensity', 'Efficacy', 'Pain location/trust in pharmaceutical company'], 45);

      this.section3FeverChart = this.createHorizontalBarChart([21, 14, 13], ['Product safety', 'Active ingredient', 'Scientific proof of benefits'], 45);

      this.section3FeverChildrenChart = this.createHorizontalBarChart([48, 35, 10], ['Safety', 'Efficacy', 'Pharmaceutical form (drops/liquid solution)'], 60);

      this.section3AllergyChart = this.createHorizontalBarChart([16, 14, 13], ['Active ingredient', 'Trust in pharmaceutical company', 'Dosage'], 45);

      this.section3SupplementsChart = this.createHorizontalBarChart([16, 15, 13], ['Active ingredient', 'Scientific proof of benefits', 'Trust in pharmaceutical company'], 45);

      this.section3ProbioticsChart = this.createHorizontalBarChart([13, 11], [' Scientific proof of benefits/dosage/product safety:', 'Price/active ingredient'], 45);

      this.section3LaxativesChart = this.createHorizontalBarChart([13, 12, 11], ['Product safety', 'Active ingredient/price', 'Dosage/scientific proof'], 45);
    }
  }

  toggleCollapsed8() {
    this.isCollapsed8 = !this.isCollapsed8;

    if (!this.isCollapsed8) {
      /* SECTION 3 CHARTS 2 */
      this.section3PainChart2 = this.createHorizontalBarChart([9, 8, 7], ['Dosage/product safety/pharmaceutical form (pills, liquid solution)', 'Brand', 'Price'], 20);

      this.section3FeverChart2 = this.createHorizontalBarChart([9, 7, 5], ['Prior experience with the brand', 'Price/pharmaceutical form (pills, liquid solution etc.)', 'Samples/frequency of contact with representative'], 20);

      this.section3FeverChildrenChart2 = this.createHorizontalBarChart([3, 3], ['Flavor', 'Price'], 20);

      this.section3AllergyChart2 = this.createHorizontalBarChart([8, 5, 4], ['Prior experience with the brand', 'Frequency of contact with representative', 'Samples'], 20);

      this.section3SupplementsChart2 = this.createHorizontalBarChart([8, 6, 4], ['Pharmaceutical form (pills, liquid solution etc.)/frequency of contact with representative', 'Price/prior experience with the brand', 'Samples'], 20);

      this.section3ProbioticsChart2 = this.createHorizontalBarChart([10, 8, 6], ['Pharmaceutical form (pills, liquid solution etc.', 'Trust in pharmaceutical company/samples', 'Frequency of contact with representative/prior experience with the brand'], 20);

      this.section3LaxativesChart2 = this.createHorizontalBarChart([9, 7, 6], ['Pharmaceutical form (pills, liquid solution etc.)/Samples', ' Prior experience with the brand', 'Frequency of contact with representative'], 20);

    }
  }

  /* SECTION 3 CHARTS 1 */
  section3PainChart = this.createHorizontalBarChart([19, 18, 11], ['Pain intensity', 'Efficacy', 'Pain location/trust in pharmaceutical company'], 45);

  section3FeverChart = this.createHorizontalBarChart([21, 14, 13], ['Product safety', 'Active ingredient', 'Scientific proof of benefits'], 45);

  section3FeverChildrenChart = this.createHorizontalBarChart([48, 35, 10], ['Safety', 'Efficacy', 'Pharmaceutical form (drops/liquid solution)'], 60);

  section3AllergyChart = this.createHorizontalBarChart([16, 14, 13], ['Active ingredient', 'Trust in pharmaceutical company', 'Dosage'], 45);

  section3SupplementsChart = this.createHorizontalBarChart([16, 15, 13], ['Active ingredient', 'Scientific proof of benefits', 'Trust in pharmaceutical company'], 45);

  section3ProbioticsChart = this.createHorizontalBarChart([13, 11], [' Scientific proof of benefits/dosage/product safety:', 'Price/active ingredient'], 45);

  section3LaxativesChart = this.createHorizontalBarChart([13, 12, 11], ['Product safety', 'Active ingredient/price', 'Dosage/scientific proof'], 45);


  /* SECTION 3 CHARTS 2 */
  section3PainChart2 = this.createHorizontalBarChart([9, 8, 7], ['Dosage/product safety/pharmaceutical form (pills, liquid solution)', 'Brand', 'Price'], 20);

  section3FeverChart2 = this.createHorizontalBarChart([9, 7, 5], ['Prior experience with the brand', 'Price/pharmaceutical form (pills, liquid solution etc.)', 'Samples/frequency of contact with representative'], 20);

  section3FeverChildrenChart2 = this.createHorizontalBarChart([3, 3], ['Flavor', 'Price'], 20);

  section3AllergyChart2 = this.createHorizontalBarChart([8, 5, 4], ['Prior experience with the brand', 'Frequency of contact with representative', 'Samples'], 20);

  section3SupplementsChart2 = this.createHorizontalBarChart([8, 6, 4], ['Pharmaceutical form (pills, liquid solution etc.)/frequency of contact with representative', 'Price/prior experience with the brand', 'Samples'], 20);

  section3ProbioticsChart2 = this.createHorizontalBarChart([10, 8, 6], ['Pharmaceutical form (pills, liquid solution etc.', 'Trust in pharmaceutical company/samples', 'Frequency of contact with representative/prior experience with the brand'], 20);

  section3LaxativesChart2 = this.createHorizontalBarChart([9, 7, 6], ['Pharmaceutical form (pills, liquid solution etc.)/Samples', 'Prior experience with the brand', 'Frequency of contact with representative'], 20);

  immunityChartVertical = this.createVerticalBarChart([48, 19, 16], ['Vitamin C', 'Vitamin D', 'Zync'], 60, true);

  sleepChartVertical = this.createVerticalBarChart([19, 16, 10], ['Passiflora incarnata (plant)', 'Vitamin B', 'Melatonin (chemical compound)'], 25, true);

  sleepChartVertical2 = this.createVerticalBarChart([16, 10, 10], ['Centrum (Pfizer)', 'Eurofarma (pharmaceutical company)', 'Calman (Aspen Pharma)'], 25, true);

  articularChartVertical = this.createVerticalBarChart([23, 19, 19], ['Collagen (protein)', 'Calcium (mineral)', 'Vitamin D'], 30, true);

  articularChartHorizontal = this.createHorizontalBarChart([7, 7, 7, 7, 7], ['Osteo Bi-Flex (Joint Health)', 'Articulamax (Nature Center)', 'Medley (pharmaceutical company)', 'Calcitran MDK (Divcom Pharma)', 'Centrum (Pfizer)'], 15, true);

  
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

  createVerticalBarChart (data, labels, max = 65, colorByPoint = false) {
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

  public doughnutChartLabels4: Label[] = [
    'Muscles (42%)',
    'Joints (39%) ',
    'Bones (35%)',
  ];
  public doughnutChartData4: MultiDataSet = [[42, 39, 35]];
  public doughnutChartType4: ChartType = 'doughnut';
  public doughnutChartTypeColors4: any[] = [
    {
      backgroundColor: ['#41C1F0', '#93D1F2', '#003866'],
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
