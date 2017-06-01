import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddworkoutPage } from '../addworkout/addworkout';
import { Day01Page } from '../day01/day01';
import { Day02Page } from '../day02/day02';
import { Day03Page } from '../day03/day03';
import { Day04Page } from '../day04/day04';
import { Day05Page } from '../day05/day05';

/**
 * Generated class for the WorkoutsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-days',
  templateUrl: 'days.html',
})
export class DaysPage {
  addworkout = AddworkoutPage;

  day1(){
    this.navCtrl.push(Day01Page);
  }
  day2(){
    this.navCtrl.push(Day02Page);
  }
  day3(){
    this.navCtrl.push(Day03Page);
  }
  day4(){
    this.navCtrl.push(Day04Page);
  }
  day5(){
    this.navCtrl.push(Day05Page);
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutsPage');
  }

}
