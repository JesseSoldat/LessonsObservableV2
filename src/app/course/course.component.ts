import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Lesson } from '../shared/model/lesson';
import { Course } from '../shared/model/course';
import { MessagesService } from '../services/messages.service';
import { LessonsPagerService } from '../services/lessons-pager.service';
import { CoursesHttpService } from '../services/courses-http.service';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers: [MessagesService, LessonsPagerService]
})
export class CourseComponent implements OnInit {
  @Input() id: number;
  course$: Observable<Course>;
  lessons$: Observable<Lesson[]>;
  detail$: Observable<Lesson>;

  constructor(private coursesService: CoursesHttpService,
              private lessonsPager: LessonsPagerService,
              private messagesService: MessagesService) { }

  ngOnInit() {
    this.course$ = this.coursesService.findCourseById(this.id);
    this.lessons$ = this.lessonsPager.lessonsPage$;

    this.lessonsPager.loadFirstPage(this.id)
      .subscribe( () => {},
      err => this.messagesService.error('Could not load first page'));
  }

  previousLessonsPage() {
    this.lessonsPager.previous().subscribe(() => {},
    err => this.messagesService.error('Could not load previous page'));
  }

  nextLessonsPage() {
    this.lessonsPager.next().subscribe(() => {},
    err => this.messagesService.error('Could not load next page'));
  }

  selectDetail(lesson: Lesson) {
    this.detail$ = this.coursesService.findLessonDetailById(lesson.url);
  }

  backToMaster() {
    this.detail$ = undefined;
  }

}
