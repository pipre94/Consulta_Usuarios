import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ToastController, LoadingController} from 'ionic-angular';

/*
  Generated class for the LoginProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {  
  
  constructor(public http: Http,
    public myToastCtrl: ToastController,public loadingCtrl: LoadingController) {
    console.log('Hello LoginProvider Provider');
  }

  User(user,contra){
    
    //console.log(user,contra);
    
    if (user ==''){

      let toast = this.myToastCtrl.create({
        message: 'El usuario o la contraseña ingresada son incorrectas',
        duration: 3000,
        position: 'top'
      });
      toast.onDidDismiss(() => {
        console.log('toast Dismissed');
      });
      toast.present();

    }else{       

    let login ={ identificacion: user, contrasenia: contra}
    let json = JSON.stringify(login);    
    let parametros = "json=" + json;    
    let headersaux = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }); //se establecen las headers
    return new Promise((resolve, reject) => {
      this.http.post( 'http://contalentosas.com/SistemaRecaudoBackendV2/web/app_dev.php/login' ,
       parametros, { headers: headersaux })
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          resolve(data);
        }, error => {
          reject(error);
        })
    }).catch((error) => { 
      console.error('API Error: ', error.status);      
      console.error('API Error: ', JSON.stringify(error));
      throw error;      
    }) 
    }   
    
  }  
  
}
