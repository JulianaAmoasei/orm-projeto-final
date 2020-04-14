import { Router } from 'express'
import PessoasController from '../controllers/PessoasController'

const router = Router()
 
router
	.get('/pessoas', PessoasController.pegaTodasAsPessoas)
	.get('/pessoas/:id', PessoasController.pegaUmaPessoa)
	.post('/pessoas', PessoasController.criaPessoa)
	.put('/pessoas/:id', PessoasController.atualizaPessoa)
	.delete('/pessoas/:id', PessoasController.apagaPessoa)
 
export default router