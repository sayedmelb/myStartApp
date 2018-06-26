import { Component } from '@angular/core';
import { SearchService } from '../../service/search.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

@Component({
  selector: 'page-prom',
  templateUrl: 'prom.html',
})
export class PromPage {
  loading: boolean = false;
  constructor(private itunes: SearchService) { }

  doSearch(term: string) {
    this.loading = true;
    console.log("search ", term);
    this.itunes.search(term).then(() => { this.loading = false; console.log(this.itunes.results) });
  }
}
