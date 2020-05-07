import { Injectable } from '@angular/core';
import { Course } from '../models/Course';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  data: any;
  courses: Course[];
  constructor(private db: AngularFireDatabase) {
    this.data = this.db.list('/Kursy');
   }
  addData(course: Course){
    this.db.object('Kursy/' + course.id).set(course)
  }
  deleteData(course: Course){
    this.db.object('/Kursy/' + course.id).remove();
  }
  getData(listPath:string):Observable<any>{
    return this.db.list(listPath).valueChanges();
  }
  updateRatingData(course:Course){

      this.db.object('Kursy/' + course.id).update({rating: course.rating, amountOfRates: course.amountOfRates, ratedBy: course.ratedBy});

  }
  updateCourseMembers(course:Course, member:string){
    this.getData('Kursy/' + course.id).subscribe(c => {
      let updatedList = c[2] + `,${member}`
      this.db.object('Kursy/' + course.id).update({enrolledUsers: updatedList})
    })
  }
  updateMaxID(max:number){
    this.db.object('maxID').update({maxID: max});
  }
  setUser(user:User){
   this.db.object('/Users/' + user.userName).set(user); 
  }
  
}
