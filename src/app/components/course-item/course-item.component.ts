import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import {Course} from '../../models/Course'
import {CourseService} from 'src/app/services/course.service';
import { Router } from '@angular/router';
import { state, trigger, style, transition,animate } from '@angular/animations';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
  animations:[    
  ]
})
export class CourseItemComponent implements OnInit {
  @Input() course: Course; 
  @Input()isEven:Boolean;
  @Output() deleteCourse:EventEmitter<Course> = new EventEmitter();
  @ViewChild('del') delbutton: ElementRef;
  private isSomeoneLogged = false;
  private hidden = true;
  public enableDelete = false;
  constructor(private courseService:CourseService,
     private router:Router,
     private loginService: LoginService,
     private ref: ChangeDetectorRef) { }
  ngOnInit() {
    this.loginService.change.subscribe(change => {
      this.isSomeoneLogged = change;
      console.log("change inside sub: " + change);
      if(!change) this.enableDelete = false;
    });
    this.loginService.userEmitter.subscribe(user =>{
        this.enableDelete = (!this.isSomeoneLogged) ? false : user[0];
        console.log("enableDelete: " + this.enableDelete);
    })
  }
  setClass() {
    let cssClass = {
      //course: true,
      'color1': this.isEven,
      //'text-white': this.isEven,
      'color2': !this.isEven,
    };
    return cssClass;
  }
  onDelete(course){
    this.deleteCourse.emit(course);
  }
  onSelect(course){
    this.router.navigate(['/details',course.id,course])
  }
  setStyle(){
    console.log("is someone logged inside style: "+this.isSomeoneLogged);
    console.log("is deleting enabled inside style: "+this.enableDelete);
    console.log("called");
    let style = {
      'display': this.isSomeoneLogged ? (this.enableDelete ? 'initial' : 'none') : 'none' 
    }
    return style;
  }
}
