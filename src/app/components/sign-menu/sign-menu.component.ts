import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-menu',
  templateUrl: './sign-menu.component.html',
  styleUrls: ['./sign-menu.component.css']
})
export class SignMenuComponent implements OnInit {

  constructor(private logService: LoginService, private router: Router) { }
  loggedUser: String;
  isSomeoneLogged = false;
  ngOnInit() {
    this.update();
  }
  logOut() {
    this.logService.signOut().then( () => this.update());
    //window.location.reload();
  }
  update() {
    this.logService.getUserName().subscribe(userName => this.loggedUser = userName)
    this.logService.getIsSomeoneLogged().subscribe(info => this.isSomeoneLogged = info);
  }
}
