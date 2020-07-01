import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4plugins_forceDirected from '@amcharts/amcharts4/plugins/forceDirected';
import * as data from './home-page-data.json';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
     const chart = am4core.create('chartdiv', am4plugins_forceDirected.ForceDirectedTree);
     const series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries());
     series.data = (data  as  any).default;
     series.dataFields.value = 'value';
     series.dataFields.name = 'name';
     series.dataFields.children = 'children';
     series.nodes.template.label.text = '{name}';
     series.fontSize = 15;
     series.minRadius = 40;
     series.maxRadius = 100;
     series.centerStrength = 0;
     series.nodes.template.events.on('hit', (node) => {
       const path = node.target.label.currentText.toLowerCase().replace(/\s/g, '');
       console.log(path);
       this.router.navigate(['/' + path]);
     });
  }

}
