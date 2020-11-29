import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  bigChart = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
  }

}
