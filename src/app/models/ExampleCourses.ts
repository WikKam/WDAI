import {Course} from './Course';
let exampleCourses:Course[];
 exampleCourses = [{
    id:1,
    name:'WDAI',
    ECTS:3,
    rating:0,
    semester:3,
    maxStudentsNo:30,
    icon: "assets/courseIcon/WDAI-icon.png"
  },{
    id:2,
    name:'Programowanie Obiektowe',
    ECTS:6,
    rating:0,
    semester:3,
    maxStudentsNo:100,
    icon: "assets/courseIcon/PO-icon.png"
  },{
    id:3,
    name:'Programowanie Funkcyjne',
    ECTS:4,
    rating:0,
    semester:3,
    maxStudentsNo:200,
    icon: "assets/courseIcon//FP-icon.png"
  },{
    id:4,
    name:'Bazy Danych',
    ECTS:5,
    rating:0,
    semester:3,
    maxStudentsNo:210,
    icon: "assets/courseIcon//DB-icon.png"
  },{
    id:5,
    name:'IWIJ',
    ECTS:2,
    rating:0,
    semester:3,
    maxStudentsNo:100,
    icon: "assets/courseIcon//IWIJ-icon.png"
  },{
    id:6,
    name:'Fizyka',
    ECTS:9,
    rating:0,
    semester:3,
    maxStudentsNo:50,
    icon: "assets/courseIcon/P-icon.png"
  },{
    id:7,
    name:'RRiR',
    ECTS:4,
    rating:0,
    semester:3,
    maxStudentsNo:150,
    icon: "assets/courseIcon/RRiR-icon.png"
  },{
    id:8,
    name:'WF',
    ECTS:1,
    rating:0,
    semester:3,
    maxStudentsNo:300,
    icon: "assets/courseIcon/PE-icon.png"
  },{
    id:9,
    name:'Algorytmy Grafowe',
    ECTS:5,
    rating:0,
    semester:3,
    maxStudentsNo:200,
    icon: "assets/courseIcon/AG-icon.png"
  },{
    id:10,
    name:'Algorytmy Geometryczne',
    ECTS:3,
    rating:0,
    semester:3,
    maxStudentsNo:200,
    icon: "assets/courseIcon/AGeo-icon.png"
  }];
  export function getExampleCourses():Course[]{
      return exampleCourses;
  }
  export function addCourse(course:Course):void{
    exampleCourses.push(course);
  } 
 /* export function getCourse(id:number):Course{
    let retCourse:Course;
    exampleCourses.forEach(course => {
      if(course.id = id)retCourse = course;
    })
    return retCourse;
  }
  export function deleteCourse(id:number):void{

  }*/
  export function getCourse(id:number):Course{
    let retCourse:Course;
    exampleCourses.forEach(course => {
      if(course.id == id)retCourse = course;
    })
    return retCourse;
  }
  export function deleteCourse(course:Course):void{
    exampleCourses.splice(exampleCourses.indexOf(course),1);
  }
  export function changeRating(id:number,rating:number):void{
    exampleCourses.forEach(course => {
      if(course.id == id)course.rating = rating;
    })
  }
  
