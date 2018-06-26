
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchMusicService } from '../../service/search-music.servic';

import {HttpModule, Http, Response} from '@angular/http';
import {ReactiveFormsModule, FormControl, FormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import { SearchItem } from '../../service/search.service';


@Component({
    selector: 'mus',
    templateUrl: 'music.html'
})

export class MusicPage {
  private loading: boolean =false;
  //private results: SearchItem[];
  private results: Observable<SearchItem[]>;
  private searchField: FormControl;

  constructor(private itunes:SearchMusicService) { }

  ngOnInit() {
      this.searchField = new FormControl();
      this.results = this.searchField.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .do(() => this.loading = true)
      .switchMap( term => this.itunes.search(term) )
      .do(() => this.loading = false);
      //.map( term => this.itunes.search(term) )
      //.switch()
     // .subscribe( 

      //  other => console.log(other)
         
        //version 1: two observable
        // obs => {
        //       obs.subscribe (other => console.log(other))
        //   }

        //version 2: sample
        //value => console.log(value)
    
   // );

  }

  doSearch(term:string) {
      console.log('test');
      this.loading =true;
    this.itunes.search(term);
    //this.loading =true;
    //this.results = this.itunes.search(term);
   //below code commented as above is better approach
    //console.log("search observable ", term);
    //this.itunes.search(term).subscribe( (data) => {
    //  this.loading = false; 
    //this.results = data;
    //console.log(" test ", this.results);
   // });

  }
}
