import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routesComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { CourseFilterPipe } from './pipes/course-filter.pipe';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { LoginComponent } from './components/login/login.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { RegisterComponent } from './components/register/register.component';
import { SignMenuComponent } from './components/sign-menu/sign-menu.component';
@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseItemComponent,
    CourseFormComponent,
    CourseFilterPipe,
    SearchFormComponent,
    CourseDetailsComponent,
    routesComponents,
    LoginComponent,
    RegisterComponent,
    SignMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, // do obsługi autentykacji
    AngularFirestoreModule, // do obslugi baz danych
    AngularFireDatabaseModule // do obslugi baz danych
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
