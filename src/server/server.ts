import * as express from 'express';
import { Application } from 'express';
import { loginRoute } from './loginRoute';
import { courseRoute } from './courseRoute';
import { lessonsRoute } from './lessonsRoute';
import { lessonDetailRoute } from './lessonDetailRoute';

declare var require: any;
const port = 8093;
const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

app.route('/api/login').post(loginRoute);
app.route('/api/courses/:id').get(courseRoute);
app.route('/api/lessons').get(lessonsRoute);
app.route('/api/lessons/:id').get(lessonDetailRoute);

app.listen(port, () => {
  console.log('Server running at port: '+ port);
  
});