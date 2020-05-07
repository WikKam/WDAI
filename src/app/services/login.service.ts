import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import { User } from '../models/User';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: User;
  userName: string;
  isSomeoneLogged: boolean;
  @Output() change: EventEmitter<boolean> = new EventEmitter();
  @Output() username: EventEmitter<string> = new EventEmitter();
  @Output() userEmitter: EventEmitter<User> = new EventEmitter();
  constructor(public auth: AngularFireAuth, public router: Router) { }
  signOut() {
    return this.auth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.setIsSomeoneLogged(false);
      this.setUserName('');
      this.change.emit(this.isSomeoneLogged);
      /*Temporary solution!!*/
      location.reload();
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
  signIn(){
    this.isSomeoneLogged = true;
    this.change.emit(this.isSomeoneLogged)
    this.username.emit(this.userName)
    this.userEmitter.emit(this.user);
    console.log(this.isSomeoneLogged);
  }
  setUser(user:User){
    this.user = user;
  }
}
