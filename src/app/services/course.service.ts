import { Injectable, EventEmitter, Output } from '@angular/core';
import {Course} from '../models/Course';
import {getExampleCourses, addCourse, deleteCourse, getCourse, changeRating} from '../models/ExampleCourses';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses: Course[];
  @Output() change: EventEmitter<any> = new EventEmitter();
  constructor() { }
  getCourses():Observable<Course[]>{
    return of(getExampleCourses());
  }
  addCourse(course:Course):void{
      addCourse(course);
  }
  deleteCourse(course:Course):void{
    deleteCourse(course);
  }
  getCourseWithId(id:any):Observable<Course>{
   return of(getCourse(id));
  }
  changeRating(id:number, rating:number):void{
    changeRating(id,rating);
  }
  updateCourses(courses: Course[]){
    this.courses = courses;
  }
  onCourseAdded(course:any){
    this.change.emit(course);
  }
}
