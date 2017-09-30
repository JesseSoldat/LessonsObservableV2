import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routerConfig } from './router.config';
//components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
//services
import { UserService } from './services/user.service';
import { CoursesService } from './services/courses.service';
import { CourseDetailResolver } from './course-detail/course-detail.resolver';
//3rd party
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { firebaseConfig } from '../environments/firebase.config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/publishLast';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/switchMap';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TopMenuComponent,
    CoursesListComponent,
    LessonsListComponent,
    CourseDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routerConfig),
    //3rd party
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    UserService,
    CoursesService,
    CourseDetailResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
