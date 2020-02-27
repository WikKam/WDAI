import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog"
import { CourseFormComponent } from '../course-form/course-form.component';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private disp = document.getElementById("navbarSupportedContent");
  isSomeoneLoggedIn = false;
  constructor(private dialog: MatDialog, private logService: LoginService) { }
  private isExpanded = false
  ngOnInit(): void {
    this.logService.change.subscribe(loggedIn => this.isSomeoneLoggedIn = loggedIn);
  }
  onClick(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.position ={
      'top':'50px',
      
    }
    dialogConfig.hasBackdrop = true;
    this.dialog.open(CourseFormComponent,dialogConfig)
  }
  onExpand(){
    let disp = document.getElementById("navbarSupportedContent");
    if(!this.isExpanded){
    disp.style.display = "initial"
    this.isExpanded = true;
    }
    else{
      disp.style.display = "none"
      this.isExpanded = false;
    }
    
  }

}
