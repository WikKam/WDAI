import { Component, OnInit } from '@angular/core';
import {Course} from '../../models/Course';
import { CourseService } from 'src/app/services/course.service';
import {CourseFilterPipe} from '../../pipes/course-filter.pipe'
import { LoginService } from 'src/app/services/login.service';
import { Observable } from 'rxjs';
import { DbService } from 'src/app/services/db.service';
import { getCourse } from 'src/app/models/ExampleCourses';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  providers: [CourseFilterPipe]
})
export class CourseListComponent implements OnInit {
  courses:Course[];
  highestID:number = 5;
  //data: any
  constructor(private courseService:CourseService, private searchPipe: CourseFilterPipe,
    private loginService:LoginService, private dbService: DbService) { }
  searchParams:any;
  ngOnInit() {
     this.dbService.getData('Kursy').subscribe(courses => {this.courses = courses
     this.courseService.updateCourses(this.courses)
  });
     this.dbService.getData('maxID').subscribe(max => this.highestID = max[0])
     this.courseService.change.subscribe(course => {
       alert('poszlo!');
       this.addCourse(course);
     })
  }
  filtered(){
    return this.searchPipe.transform(this.courses,this.searchParams);
  }
  deleteCourse(course:Course){
    this.courses = this.courses.filter(t => t.id !== course.id);
    this.dbService.deleteData(course);
  }
  addCourse(course:any){
    this.highestID++;
    const correctCourse = {...course,id:this.highestID,rating:0,enrolledUsers:"",
      amountOfRates: 0,
      ratedBy:""};
    this.courses.push(correctCourse);
    this.dbService.addData(correctCourse);
    this.dbService.updateMaxID(this.highestID)
  }
  addSearchParams(searchParam:any){
    this.searchParams = searchParam;
  }
}
