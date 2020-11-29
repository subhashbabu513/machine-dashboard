import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.scss']
})
export class PostsContainerComponent implements OnInit {

  postOptions: {};
  @Input() data: any = [];

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {
    this.postOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Post DATA'
      },
      tooltip: {
        split: true,
        valueSuffix: 'Minutes'
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true,
      },
      series: this.data
    };
    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
