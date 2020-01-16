import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/Course';

@Pipe({
  name: 'courseFilter'
})
export class CourseFilterPipe implements PipeTransform {

  transform(courses:Course[] , /*...args: any[]*/parameters:any): any {
    if(!courses){
      console.log('!courses');
      return [];
    }
    let filteredCourses:Course[] = [...courses];
    if(!parameters){
     return filteredCourses; 
    }
    if(parameters.name){
      filteredCourses=filteredCourses.filter(course => course.name.includes(parameters.name));
    }
    if(parameters.ECTS){
      filteredCourses=filteredCourses.filter(course => course.ECTS == parameters.ECTS);
    }
    if(parameters.maxStudentsNo){
      filteredCourses=filteredCourses.filter(course => course.maxStudentsNo == parameters.maxStudentsNo);
    }
    if(parameters.semester){
      filteredCourses=filteredCourses.filter(course => course.semester == parameters.semester)
    }
    return filteredCourses;
  }
}
