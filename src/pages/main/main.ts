import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsPage } from '../news/news';
import { DaysPage } from '../days/days';
import { ProgressPage } from '../progress/progress';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the MainPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

  newsRoot = NewsPage;
  DaysRoot = DaysPage;
  progressRoot = ProgressPage;
  profileRoot = ProfilePage;
  


  constructor(public navCtrl: NavController) {}

}
