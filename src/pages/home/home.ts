import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user='';
  contra='';


  constructor(public navCtrl: NavController,
    public navParams: NavParams
    ,public Userprov:UsersProvider   
    ) {
      this.user=navParams.get('Data1');
      this.contra=navParams.get('Contra');
  }

  Consul(){
    
    this.Userprov.DataUser();


  }

}
