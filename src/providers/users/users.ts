import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { LoginProvider } from '../login/login';
import { Token } from '@angular/compiler';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {

  constructor(public http: HttpClient, public loginprov: LoginProvider) {
    console.log('Hello UsersProvider Provider');
  }
  user:'87123';
  contra:'123';

  DataUser(){
    
       
    let parametros = 'authorization='+ this.loginprov.User(this.user,this.contra) ;
    let headersaux = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }); //se establecen las headers

    //usuarios
    return new Promise((resolve, reject) => {
      this.http.post('http://contalentosas.com/SistemaRecaudoBackendV2/web/app_dev.php/user/querymovil'
      , parametros, { headers: headersaux })
        .subscribe(res => {
         console.log(res);
         resolve(res);          
        },error => {
          reject(error);
        });
    }).catch(e => {
      console.error("Error al descargar usuarios" + e.message);
      throw e;
    }); 
  }

}
