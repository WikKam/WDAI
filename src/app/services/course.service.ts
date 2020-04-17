import { Injectable, EventEmitter, Output } from '@angular/core';
import {Course} from '../models/Course';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses: Course[];
  @Output() change: EventEmitter<any> = new EventEmitter();
  constructor() { }
  updateCourses(courses: Course[]){
    this.courses = courses;
  }
  onCourseAdded(course:any){
    this.change.emit(course);
  }
}
