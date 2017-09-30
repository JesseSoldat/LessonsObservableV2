import * as express from 'express';
import { Application } from 'express';
import { loginRoute } from './loginRoute';

declare var require: any;
const port = 8091;
const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

app.route('/api/login').post(loginRoute);

app.listen(port, () => {
  console.log('Server running at port: '+ port);
  
});