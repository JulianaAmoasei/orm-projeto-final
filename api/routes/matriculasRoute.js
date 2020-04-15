import { Router } from 'express'
import MatriculasController from '../controllers/MatriculasController'

const router = Router()
 
router
	.get('/matriculas', MatriculasController.pegaTodasAsMatriculas)
	.get('/matriculas/:id', MatriculasController.pegaUmaMatricula)
	.post('/matriculas', MatriculasController.criaMatricula)
	.put('/matriculas/:id', MatriculasController.atualizaMatricula)
	.delete('/matriculas/:id', MatriculasController.apagaMatricula)
 
export default router