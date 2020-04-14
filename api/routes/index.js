import bodyParser from 'body-parser';
import pessoas from './pessoasRoute'
 
module.exports = app => {
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(pessoas);
};
