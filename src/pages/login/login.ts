import { Component } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  //user: string;
  //contra: string;

  User = '';
  Contra= '';
  Data:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public login:LoginProvider) {
    
    //this.Data=this.login.User(this.User,this.Contra);
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  acceso(){
    this.login.User(this.User,this.Contra);
    
      this.navCtrl.push(HomePage);  
  }

}
