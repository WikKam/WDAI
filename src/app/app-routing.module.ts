import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { AppComponent } from './app.component';
import {Course} from './models/Course'
import { CourseListComponent } from './components/course-list/course-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const appRoutes :Routes = [
  {path:'', component: CourseListComponent},
  {path:'details/:id', component: CourseDetailsComponent, data: Course},
  {path:'login', component: LoginComponent},
  {path:'register',component: RegisterComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routesComponents = [CourseDetailsComponent,AppComponent, CourseListComponent,
   LoginComponent, RegisterComponent];
