import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { PromPage } from '../prom/prom';
import { ObservePage } from '../observe/observe';
import { MusicPage } from'../music/music';
//import { MusicObservablePage } from '../music-observable/music-observable';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = PromPage;
  tab5Root = ObservePage;
  tab6Root = MusicPage;


  constructor() {

  }
}
