import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { AppComponent } from './app.component';
import {Course} from './models/Course'
import { CourseListComponent } from './components/course-list/course-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LandingComponent } from './components/landing/landing.component';

const appRoutes :Routes = [
  {path:'', component: LandingComponent, data:{animation: 'main'}},
  {path:'details/:id', component: CourseDetailsComponent,data:{animation: 'isRight'}},
  {path:'login', component: LoginComponent, data:{animation: 'log'}},
  {path:'register',component: RegisterComponent, data:{animation: 'reg'}},
  {path: 'courselist',component: CourseListComponent, data:{animation: 'courseList'}}
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routesComponents = [CourseDetailsComponent,AppComponent, CourseListComponent,
   LoginComponent, RegisterComponent];
