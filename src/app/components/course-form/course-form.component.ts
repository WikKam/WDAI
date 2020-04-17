import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';
import { Course } from 'src/app/models/Course';
import {CourseService} from 'src/app/services/course.service'
import {MatDialogRef} from '@angular/material/dialog'
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
    description: new FormControl(''),
    icon:new FormControl(''),
  })
  
  constructor(public dialogRef: MatDialogRef<CourseFormComponent>, public service: CourseService) { }

  ngOnInit() {
  }
  onSubmit(){
    const course = this.courseForm.value;
    this.service.onCourseAdded(course);
    this.dialogRef.close();
  }
  onClose(){
    this.dialogRef.close();
  }

}
