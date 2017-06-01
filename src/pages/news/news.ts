import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



/**
 * Generated class for the ExercisesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation
 */
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
bpress(){
   // this.navCtrl.push(BpressPage);
}


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



}
