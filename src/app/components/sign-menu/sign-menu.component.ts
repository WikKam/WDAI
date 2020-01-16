import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sign-menu',
  templateUrl: './sign-menu.component.html',
  styleUrls: ['./sign-menu.component.css']
})
export class SignMenuComponent implements OnInit {

  constructor(private logService: LoginService) { }
  loggedUser: String;
  isSomeoneLogged: boolean;
  ngOnInit() {
    this.logService.getUserName().subscribe(userName => this.loggedUser = userName)
    this.logService.getIsSomeoneLogged().subscribe(info => this.isSomeoneLogged = info);
  }

}
