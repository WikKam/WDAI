import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userName: string;
  isSomeoneLogged: boolean;
  constructor(public auth: AngularFireAuth, public router: Router) { }
  signOut() {
    return this.auth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.setIsSomeoneLogged(false);
      this.setUserName('');
    })
  }
  getUserName():Observable<string>{
    return of(this.userName);
  }
  setUserName(userName){
    this.userName = userName;
  }
  getIsSomeoneLogged():Observable<boolean>{
    return of(this.isSomeoneLogged);
  }
  setIsSomeoneLogged(isSomeoneLogged){
    this.isSomeoneLogged = isSomeoneLogged;
  }
}
