import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import {FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/models/User';
import { DbService } from 'src/app/services/db.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  constructor(
    public auth: AngularFireAuth,
    public router: Router,
    public loginServ: LoginService,
    public dbService: DbService
      ) { }

  ngOnInit() {
  }
  signInUser(email,password){
    //this.auth.auth.setPersistence(firebase.auth().Auth.Persistence.LOCAL);
    return this.auth.auth.signInWithEmailAndPassword(email,password)
    .then(result => {
      let parsedEmail = email.replace('.','dot');
      this.dbService.getData('Users/' + parsedEmail)
      .subscribe(user => {
        console.log(parsedEmail);
        console.log(user);
        localStorage.setItem('user',JSON.stringify(result))
        this.loginServ.setUserName(this.auth.auth.currentUser.email)
        this.loginServ.setUser(user);
        this.loginServ.signIn();
      })
    })
    .catch(error => console.log(error.message))
  }
  onLoginButtonPressed(){
    this.signInUser(
      this.loginForm.value.email,this.loginForm.value.password)
      .then( () => this.router.navigate(['courselist']));
  }
}
