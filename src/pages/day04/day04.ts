import { Component } from '@angular/core';
import { NavController, NavParams,Platform } from 'ionic-angular';
import { AlertController, ToastController } from 'ionic-angular';
import {Sqlite} from '../../providers/sqlite';
/**
 * Generated class for the Day01Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-day04',
  templateUrl: 'day04.html',
})
export class Day04Page {
  public todos = [];
  public text : any;
  public p:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,private platform:Platform,public sqliteService : Sqlite) {
        //First We need to ready the Platform
        this.p = "day4";
    this
      .platform
      .ready()
      .then(() => {
        this
          .sqliteService
          .getRowsTusesday()
          .then(s => {
            this.todos = this.sqliteService.arr;
          });
      })
  }


 doPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Add patient',
      message: "Enter patient name, age, diseas",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
        
        },
        {
          name:'age',
          placeholder: 'Age',
          type:'number'
        },
        {
          name: 'diseas',
          placeholder: 'Diseas',
      
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.add(data.name, data.age, data.diseas);
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
}

  //Adding the Function
  add(i, k, m) {
    this
      .sqliteService
      .addItemThu(i, k, m)
      .then(s => {
        this.todos = this.sqliteService.arr;
        this.text = '';
      });
  }
      delete(i) {
    this
      .sqliteService
      .delThu(i)
      .then(s => {
        this.todos = this.sqliteService.arr;
      });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Day01Page');
  }

}
