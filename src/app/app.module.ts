import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routerConfig } from './router.config';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { LoadingComponent } from './loading/loading.component';
import { MessagesComponent } from './messages/messages.component';
import { CreateLessonComponent } from './create-lesson/create-lesson.component';
import { AllLessonsComponent } from './all-lessons/all-lessons.component';
import { CourseComponent } from './course/course.component';
import { SafeUrlPipe } from './shared/pipes/safe-url.pipe';
//services
import { CourseDetailResolver } from './course-detail/course-detail.resolver';
import { UserService } from './services/user.service';
import { CoursesService } from './services/courses.service';
import { MessagesService } from './services/messages.service';
import { CoursesHttpService } from './services/courses-http.service';
//3rd party
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { firebaseConfig } from '../environments/firebase.config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/publishLast';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TopMenuComponent,
    CoursesListComponent,
    LessonsListComponent,
    CourseDetailComponent,
    LoadingComponent,
    MessagesComponent,
    CreateLessonComponent,
    AllLessonsComponent,
    CourseComponent,
    LessonDetailComponent,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routerConfig),
    //3rd party
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    UserService,
    CoursesService,
    CourseDetailResolver,
    MessagesService,
    CoursesHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
