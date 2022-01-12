import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-card-relationship-companies',
  templateUrl: './card-relationship-companies.component.html',
  styleUrls: ['./card-relationship-companies.component.css']
})
export class CardRelationshipCompaniesComponent implements OnInit {
  chartSearchChannel = this.createChartSearchChannel();


  constructor() { }

  ngOnInit(): void {
  }
  

  reloadGraphic(state) {

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
          ['', 91],
          {
            name: 'Other',
            y: 3.8,
            dataLabels: {
              enabled: false
            }
          }
        ]
      }]
    });
  }
  
}
