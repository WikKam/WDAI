import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { CourseService } from 'src/app/services/course.service';
import {Course} from '../../models/Course'
import { LoginService } from 'src/app/services/login.service';
import { DbService } from 'src/app/services/db.service';
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  @Input() details:Course;
  hidden:Boolean = true;
  amountOfRates:number = 0;
  courses:Course[] = [];
  username:string;
  constructor(private route:ActivatedRoute, private courseService:CourseService, private loginService: LoginService,
    private dbService: DbService) {
    
     }
  changeRating(rate){
      if(this.details.ratedBy.includes(this.username)){
        alert("Już oceniłeś ten kurs!");
        return;
      }
      if(this.details.enrolledUsers.includes(this.username)){
        rate = parseInt(rate);
        this.details.rating = (this.details.rating*this.details.amountOfRates + rate)/(++this.details.amountOfRates)
        this.details.ratedBy += this.username
        this.dbService.updateRatingData(this.details)
      }
      else if(!this.username||this.username == ""){
        alert("Nie jestes zalogowany!")
      }
      else{
        alert("Nie jesteś zapisany na ten kurs!")
      }
    
}
  ngOnInit() {
    this.dbService.getData('/Kursy').subscribe(courses => {
      let id = this.route.snapshot.paramMap.get('id');
      this.courses = courses;
      this.courses.filter(course => course).forEach(course => {
        if(course.id.toString() == id)this.details = course;
      })});
    this.loginService.getUserName().subscribe(username => this.username = username)
  }
  signUpUserOnCourse(){
      if(this.details.enrolledUsers.includes(this.username)){
        alert('jestes juz zapisany!')
        return;
      }
      if(!this.username){
        alert('nie jesteś zalogowany!')
        return;
      }
      this.dbService.updateCourseMembers(this.details,this.username);
      this.details.enrolledUsers += `,${this.username}`;
      alert("Zapisałeś się na kurs!")
    
  }

}
