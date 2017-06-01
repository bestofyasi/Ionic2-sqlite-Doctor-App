import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';
import { NewsPage } from '../pages/news/news';
import { DaysPage } from '../pages/days/days';
import { ProgressPage } from '../pages/progress/progress';
import { ProfilePage } from '../pages/profile/profile';
import { MainPage } from '../pages/main/main';
import { AddworkoutPage } from '../pages/addworkout/addworkout';
import { Day01Page } from '../pages/day01/day01';
import { Day02Page } from '../pages/day02/day02';
import { Day03Page } from '../pages/day03/day03';
import { Day04Page } from '../pages/day04/day04';
import { Day05Page } from '../pages/day05/day05';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Sqlite} from '../providers/sqlite';
import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'Highcharts';

@NgModule({
  declarations: [
    MyApp,
    MainPage,
    NewsPage,
    DaysPage,
    ProgressPage,
    ProfilePage,
    AddworkoutPage,
    Day01Page,
    Day02Page,
    Day03Page,
    Day04Page,
    Day05Page
    
   ],
  imports: [
    IonicModule.forRoot(MyApp), ChartModule.forRoot(highcharts)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    NewsPage,
    DaysPage,
    ProgressPage,
    ProfilePage,
    AddworkoutPage,
    Day01Page,
    Day02Page,
    Day03Page,
    Day04Page,
    Day05Page     
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Sqlite,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
