import { dbData } from './db-data';
import { find } from 'lodash';

export function lessonDetailRoute(req, res) {
  const lessonUrl = req.params['id'];

  console.log("fetching lesson", lessonUrl);

  let allLessons = [];

  dbData.forEach(course => allLessons = allLessons.concat(course.lessons));

  const lesson = find(allLessons, lesson => lesson.url === lessonUrl);

  console.log('lesson', lesson);
  
  res.status(200).json(lesson);
}