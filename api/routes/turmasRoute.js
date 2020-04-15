import { Router } from 'express'
import TurmasController from '../controllers/TurmasController'

const router = Router()
 
router
	.get('/turmas', TurmasController.pegaTodasAsTurmas)
	.get('/turmas/:id', TurmasController.pegaUmaTurma)
	.post('/turmas', TurmasController.criaTurma)
	.put('/turmas/:id', TurmasController.atualizaTurma)
	.delete('/turmas/:id', TurmasController.apagaTurma)
 
export default router