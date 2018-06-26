import { Component } from '@angular/core';
import { single } from './data';

@Component({
  selector: 'page-observe',
  templateUrl: 'observe.html'
})

export class ObservePage {

  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  //needed
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { single })
  }

  onSelect(event) {
    console.log(event);
  }

}