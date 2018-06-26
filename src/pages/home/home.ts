import { Component } from '@angular/core';
import { Http, URLSearchParams, Headers, RequestOptions} from '@angular/http';

@Component({
    selector: 'page-home',
    template: `
    <ion-content padding>
  <!-- for buttons from mobiscroll -->
  <mbsc-form>
  <!--<div class="mbsc-form-group">
   <div class="mbsc-form-group">-->
    <mbsc-button color="primary" (click)="doGET()">GET</mbsc-button>
    <mbsc-button color="primary" (click)="doGETAsPromise()">As Promise</mbsc-button>
    <mbsc-button color="warning" (click)="doGETAsObservableError()">Error as Observable</mbsc-button>
    <mbsc-button color="primary" (click)="doGETWithHeaders()">OBSERVABLE With Headers</mbsc-button>
  
  </mbsc-form>
  <!-- end of mobiscroll test button -->
  
</ion-content>
    `,
    styles: [
    `
    .bk-default {
        background-color: white;
     }
     `
  ],
})

export class HomePage {

    apiRoot: string ="http://httpbin.org";// "https://jsonplaceholder.typicode.com/photos"; //"http://httpbin.org"; 

    constructor(private http: Http) { }  
  
    doGET() {
      console.log("GET");
      let url = `${this.apiRoot}/get`;
      //let url = `${this.apiRoot}`;
      let search = new URLSearchParams();
      search.set('foo', 'moo');
      search.set('limit', '25');
      this.http.get(url, {search}).subscribe(res => console.log(res.json()));
      //this.http.get(url).subscribe(res => console.log(res.json()));
    }
  
    doPOST() {
      console.log("POST");
    }
  
    doPUT() {
      console.log("PUT");
    }
  
    doDELETE() {
      console.log("DELETE");
    }
  
    doGETAsPromise() {
        console.log("GET AS PROMISE");
        let url = `${this.apiRoot}/get`;
        this.http.get(url)
            .toPromise()
            .then(res => console.log(res.json()));
    }
  
    doGETAsPromiseError() {
      console.log("GET AS PROMISE ERROR");
    }
  
    doGETAsObservableError() {
      console.log("GET AS OBSERVABLE ERROR");
      let url = `${this.apiRoot}/post`;
      this.http.get(url).subscribe(
          res => console.log(res.json()),
          msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
      );
    }
  
    doGETWithHeaders() {
      console.log("GET WITH HEADERS");
    

    let headers: Headers = new Headers();
    headers.append('Authorization', btoa('username:password'));
    let opts: RequestOptions = new RequestOptions();
    opts.headers = headers;
    let url = `${this.apiRoot}/get`;
    this.http.get(url, opts).subscribe(
        res => console.log(res.json()),
        msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
    );

    }

}