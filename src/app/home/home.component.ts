import { Component, OnInit } from '@angular/core';
import { Course } from '../shared/model/course';
import { Lesson } from '../shared/model/lesson';
import { Observable } from 'rxjs/Observable';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  courses$: Observable<Course[]>;
  latestLessons$: Observable<Lesson[]>;

  constructor(private coursesServices: CoursesService) { }

  ngOnInit() {
    this.courses$ = this.coursesServices.findAllCourses();

    this.latestLessons$ = this.coursesServices.findLatestLessons();
    
  }

}
