import { MbscModule } from '@mobiscroll/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { PromPage } from '../pages/prom/prom';
import { SearchService } from '../service/search.service';
import { ObservePage } from '../pages/observe/observe';
//import { Ng2MapModule} from 'ng2-map';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PromPage,
    ObservePage
  ],
  imports: [ 
    MbscModule, 
    FormsModule, 
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    ReactiveFormsModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule
    //Ng2MapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBdVpB2v1d3nRmNMRN5MAGHQtPx1EpyCRc'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PromPage,
    ObservePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SearchService ,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
