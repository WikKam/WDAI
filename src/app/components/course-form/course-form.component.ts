import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';
import { Course } from 'src/app/models/Course';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  @Output() addCourse:EventEmitter<any> = new EventEmitter();
  courseForm = new FormGroup({
    name:  new FormControl(''),
    ECTS: new FormControl(''),
    semester:new FormControl(''),
    maxStudentsNo:new FormControl(''),
    icon:new FormControl(''),
  })
  
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    const course = this.courseForm.value;
    this.addCourse.emit(course);
  }

}
