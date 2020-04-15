import { Router } from 'express'
import NiveisController from '../controllers/NiveisController'

const router = Router()
 
router
	.get('/niveis', NiveisController.pegaTodosOsNiveis)
	.get('/niveis/:id', NiveisController.pegaUmNivel)
	.post('/niveis', NiveisController.criaNivel)
	.put('/niveis/:id', NiveisController.atualizaNivel)
	.delete('/niveis/:id', NiveisController.apagaNivel)
 
export default router