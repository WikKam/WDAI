import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { CourseService } from 'src/app/services/course.service';
import {Course} from '../../models/Course'
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  @Input() details:Course;
 // public details:any;
 // @Output() changeRatingOfCourse: EventEmitter<Course> = new EventEmitter()
  signedUpMembers: Set<String> = new Set();
  hidden:Boolean = true;
  amountOfRates:number = 0; 
  constructor(private route:ActivatedRoute, private courseService:CourseService, private loginService: LoginService) { }
  onExpand(course){
    this.hidden = !this.hidden;
  }
  getCurrExpand(){
    if(this.hidden){
      return {
        'hiddenInfo': true,
        'info': false
      }
    }
    else{
      return {
        'hiddenInfo': false,
        'info':true
      }
    }
  }
  changeRating(rate){
    this.loginService.getUserName().subscribe(username => {
      if(this.signedUpMembers.has(username)){
        rate = parseInt(rate);
        this.details.rating = (this.details.rating*this.amountOfRates + rate)/(++this.amountOfRates)
        //this.changeRatingOfCourse.emit(this.details);
        this.courseService.changeRating(this.details.id,this.details.rating);
       console.log(rate);
      }
      else{
        alert("Nie jesteś zapisany na ten kurs!")
      }
    })
  }
  ngOnInit() {
   let id = this.route.snapshot.paramMap.get('id');
   /*this.details = this.route.snapshot.data;
   console.log(this.details);
   this.courseId = id;*/
   //this.route.data.subscribe(data => console.log(data));
  this.courseService.getCourseWithId(id).subscribe(course => this.details = course);
   //console.log(this.route.snapshot.data);
  }
  signUpUserOnCourse(){
    //trzeba to jakoś dodawać dalej potem
    this.loginService.getUserName().subscribe(username => this.signedUpMembers.add(username))
  }

}
