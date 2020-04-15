import bodyParser from 'body-parser';
import pessoas from './pessoasRoute'
import niveis from './niveisRoute'
import turmas from './turmasRoute'
import matriculas from './matriculasRoute'
 
module.exports = app => {
	app.use(
		bodyParser.json(),
		bodyParser.urlencoded({ extended: false }),
		pessoas, 
		niveis, 
		turmas, 
		matriculas
		)
	};
