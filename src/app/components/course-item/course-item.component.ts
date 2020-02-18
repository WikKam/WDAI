import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Course} from '../../models/Course'
import {CourseService} from 'src/app/services/course.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  @Input() course: Course; 
  @Input()isEven:Boolean;
  @Output() deleteCourse:EventEmitter<Course> = new EventEmitter();
  private hidden = true;
  constructor(private courseService:CourseService, private router:Router) { }
  ngOnInit() {
  }
  setClass() {
    let cssClass = {
      //course: true,
      'bg-primary': this.isEven,
      'text-white': this.isEven,
      'bg-light': !this.isEven,
    };
    return cssClass;
  }
  setButtonClass(){
    let cssClass = {
      'btn':true,
      'btn-primary': !this.isEven,
      'btn-light':this.isEven
    }
    return cssClass;
  }
  onDelete(course){
    this.deleteCourse.emit(course);
  }
  onSelect(course){
    this.router.navigate(['/details',course.id,course])
  }
}
