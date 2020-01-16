import { Component, OnInit } from '@angular/core';
import {Course} from '../../models/Course';
import { CourseService } from 'src/app/services/course.service';
import {CourseFilterPipe} from '../../pipes/course-filter.pipe'
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  providers: [CourseFilterPipe]
})
export class CourseListComponent implements OnInit {
  courses:Course[];
  highestID:number = 10;
  constructor(private courseService:CourseService, private searchPipe: CourseFilterPipe,
    private loginService:LoginService) { }
  searchParams:any;
  ngOnInit() {
     this.courseService.getCourses().subscribe(courses => this.courses = courses);
  }
  filtered(){
    return this.searchPipe.transform(this.courses,this.searchParams);
  }
  deleteCourse(course:Course){
    console.log("lul");
    this.courses = this.courses.filter(t => t.id !== course.id);
    this.courseService.deleteCourse(course);
  }
  addCourse(course:any){
    this.highestID++;
    const correctCourse = {...course,id:this.highestID,rating:0};
    this.courseService.addCourse(correctCourse);
    //this.courses.push(correctCourse);
  }
  addSearchParams(searchParam:any){
    this.searchParams = searchParam;
    console.log(this.searchParams);
  }
}
