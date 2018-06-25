import { Injectable } from "@angular/core";
import {HttpModule, Http, URLSearchParams, Headers, RequestOptions} from '@angular/http';
import {  Response} from '@angular/http';
//import 'rxjs/Rx';

//import {HttpModule, Http, Response} from '@angular/http';
import {ReactiveFormsModule, FormControl, FormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

class SearchItem {
    constructor(public track: string,
                public artist: string,
                public thumbnail: string,
                public link: string,
                public artistId: string) {
    }
  }

@Injectable()
export class SearchService {
    apiRoot:string = 'https://itunes.apple.com/search';
    results:Object[];
    loading:boolean;
  
    constructor(private http:Http) { 
      this.results = [];
      this.loading = false;
    }
  
    search(term:string) {
        let promise = new Promise((resolve, reject) => {
          let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
          //let headers: Headers = new Headers();
           // headers.append('Access-Control-Allow-Origin', '*');
            //let opts: RequestOptions = new RequestOptions();
            //opts.headers = headers;
         // let
          //this.http.get(apiURL,opts)
          this.http.get(apiURL)
            .toPromise()
            .then(
              res => { // Success
              this.results = res.json().results.map(item =>{
                return new SearchItem(
                    item.trackName,
                    item.artistName,
                    item.trackViewUrl,
                    item.artworkUrl30,
                    item.artistId
                );
              });
              resolve();
              },
              msg => { // Error
              reject(msg);
              }
            );
        });
        return promise;
      }
      
  }