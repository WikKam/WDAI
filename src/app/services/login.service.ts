import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userName: String;
  isSomeoneLogged: boolean;
  constructor() { }
  getUserName():Observable<String>{
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
