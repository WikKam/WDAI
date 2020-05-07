import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import {FormGroup, FormControl } from '@angular/forms';
import { DbService } from 'src/app/services/db.service';
import { User } from 'src/app/models/User';
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
  constructor(public auth: AngularFireAuth,
     public router: Router,
     public dbService: DbService) { }

  ngOnInit() {
  }
  signUpUser(email,password){
    return this.auth.auth.createUserWithEmailAndPassword(email,password)
    .then()
    .catch(error => window.alert(error.message))
  }
  onRegisterButtonPressed(){
    console.log('a');
    this
    .signUpUser(
      this.registerForm.value.email,
      this.registerForm.value.password)
      .then(
        () => {
          let user = new User();
          let parsedname = this.registerForm.value.email.replace('.','dot');
          console.log(parsedname); 
          user.userName = parsedname;
          user.isAdmin = false;
          user.courses = [];
          this.dbService.setUser(user);
          this.router.navigate(['courselist'])}
        );
    
  }

}
