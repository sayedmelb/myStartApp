import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchService } from '../../service/search.service';

import {HttpModule, Http, Response} from '@angular/http';
import {ReactiveFormsModule, FormControl, FormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

/**
 * Generated class for the PromPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
// @Component({
//   selector: 'page-prom',
//   templateUrl: 'prom.html',
// })
// export class PromPage {

//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//   }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad PromPage');
//   }

// }

@Component({
  selector: 'page-prom',
  templateUrl: 'prom.html',
})
export class PromPage {
  loading: boolean =false;
  constructor(private itunes:SearchService) { }

  doSearch(term:string) {
    this.loading =true;
 console.log("search ", term);
    this.itunes.search(term).then( () => {this.loading = false; console.log(this.itunes.results)});
  }
}
