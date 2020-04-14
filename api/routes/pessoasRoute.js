import { Router } from 'express'
import PessoasController from '../controllers/PessoasController'

const router = Router()
 
router
	.get('/pessoas', PessoasController.pegaTodasAsPessoas)
 
export default router