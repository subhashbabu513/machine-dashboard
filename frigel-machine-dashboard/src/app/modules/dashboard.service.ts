import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor() {}

  bigChart() {
    return [
      {
        name: 'Time Series',
        data: [
          [new Date(2015, 0, 1), Math.random() * 100],
          [new Date(2015, 0, 2), Math.random() * 100],
          [new Date(2015, 0, 3), Math.random() * 100],
          [new Date(2015, 0, 4), Math.random() * 100],
          [new Date(2015, 0, 5), Math.random() * 100],
          [new Date(2015, 0, 6), Math.random() * 100],
          [new Date(2015, 0, 7), Math.random() * 100],
          [new Date(2015, 0, 8), Math.random() * 100],
          [new Date(2015, 0, 9), Math.random() * 100],
          [new Date(2015, 0, 10), Math.random() * 100],
        ],
      },
    ];
  }


  postsChart() {
    return [
      {
        name: 'Time Series',
        data: [
          [new Date(2015, 0, 1), Math.random() * 100],
          [new Date(2015, 0, 2), Math.random() * 100],
          [new Date(2015, 0, 3), Math.random() * 100],
          [new Date(2015, 0, 4), Math.random() * 100],
          [new Date(2015, 0, 5), Math.random() * 100],
          [new Date(2015, 0, 6), Math.random() * 100],
          [new Date(2015, 0, 7), Math.random() * 100],
          [new Date(2015, 0, 8), Math.random() * 100],
          [new Date(2015, 0, 9), Math.random() * 100],
          [new Date(2015, 0, 10), Math.random() * 100],
        ],
      },
    ];
  }
}
