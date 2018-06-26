import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/observable';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'map',
  templateUrl: 'map.html'
})
export class MapPage {
  public positions: any[];

  constructor(public navCtrl: NavController) {
    this.positions = this.getRandomMarkers();
  }

  getRandomMarkers() {
    let randomLat: number, randomLng: number;

    let positions = [];
    for (let i = 0 ; i < 9; i++) {
      randomLat = Math.random() * (43.7399 - 43.7300) + 43.7300;
      randomLng = Math.random() * (-79.7600 - -79.7699) + -79.7699;
      positions.push([randomLat, randomLng]);
    }
    return positions;
  }

  showMarkersFromObservable() {
    of(this.getRandomMarkers()) // Think this as http call
      .subscribe( positions => {
        this.positions = positions;
      });
  }

}
