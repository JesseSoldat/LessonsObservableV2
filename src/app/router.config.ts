import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CreateLessonComponent } from './create-lesson/create-lesson.component';
import { AllLessonsComponent } from './all-lessons/all-lessons.component';
import { CourseDetailResolver } from './course-detail/course-detail.resolver';


export const routerConfig: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'course/:id', component: CourseDetailComponent,
    resolve: {
      detail: CourseDetailResolver
    } 
  },
  { path: 'all-lessons', component: AllLessonsComponent },
  { path: 'lesson/new', component: CreateLessonComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', pathMatch: 'full', redirectTo: '/home' }
];