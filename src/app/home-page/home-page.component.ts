import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4plugins_forceDirected from '@amcharts/amcharts4/plugins/forceDirected';
import * as data from './home-page-data.json';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor() { }

  ngOnInit() {

     let chart = am4core.create('chartdiv', am4plugins_forceDirected.ForceDirectedTree);
     let series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries());
     series.data = data;
     series.dataFields.value = 'value';
     series.dataFields.name = 'name';
     series.dataFields.children = 'children';
     series.nodes.template.label.text = '{name}';
     series.fontSize = 10;
     series.minRadius = 15;
     series.maxRadius = 40;
  }

}
