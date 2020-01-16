import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import {FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  constructor(public auth: AngularFireAuth, public router: Router) { }

  ngOnInit() {
  }
  signUpUser(email,password){
    return this.auth.auth.createUserWithEmailAndPassword(email,password)
    .then()
    .catch(error => window.alert(error.message))
  }
  onRegisterButtonPressed(){
    console.log('a');
    this.signUpUser(this.registerForm.value.email,this.registerForm.value.password);
  }

}
