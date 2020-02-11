import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import {FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
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
  constructor(public auth: AngularFireAuth, public router: Router, public loginServ: LoginService) { }

  ngOnInit() {
  }
  signInUser(email,password){
    //this.auth.auth.setPersistence(firebase.auth().Auth.Persistence.LOCAL);
    return this.auth.auth.signInWithEmailAndPassword(email,password)
    .then(result => {
      localStorage.setItem('user',JSON.stringify(result))
      this.loginServ.setIsSomeoneLogged(true);
      this.loginServ.setUserName(this.auth.auth.currentUser.email)
    })
    .catch(error => console.log(error.message))
  }
  onLoginButtonPressed(){
    console.log('a');
    this.signInUser(this.loginForm.value.email,this.loginForm.value.password).then( () => this.router.navigate(['/']));
  }
}
