import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController, Platform } from 'ionic-angular';
import {Sqlite} from '../../providers/sqlite';

/**
 * Generated class for the ProgressPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-progress',
  templateUrl: 'progress.html',
})
export class ProgressPage {

  chartOptions: any;
  public todos = [];
  public text : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,public sqliteService : Sqlite,private platform:Platform) {
    this
      .platform
      .ready()
      .then(() => {
        this
          .sqliteService
          .getWeight()
          .then(s => {
            this.todos = this.sqliteService.arr;
          });
      })

      this.chartOptions = {
        chart:{
          type: 'bar'
        },
        title:{
          text: 'Patient Count Chart'
        },
        xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis:{
          title:{
            text: 'Patients Statics'
          }
        },
        series:[{
        name: 'Attendance',
        data:[50,89,63,55,78]
      }, {
        name: 'Infectious Diseases',
        data: [5, 5, 20, 50,10]
    }]
      
      
      }
  }

   doPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Add Weight',
      message: "Please add your weight at the end of the month",
      inputs: [
        {
          name: 'weight',
          placeholder: 'Enter weight(KG)',
          type: 'number'
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
            this.add(data.weight)
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
}

  add(i) {
    this
      .sqliteService
      .addWeight(i)
      .then(s => {
        this.todos = this.sqliteService.arr;
        this.text = '';
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgressPage');
  }

}
