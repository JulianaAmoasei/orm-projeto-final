const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()
 
router
	.get('/pessoas', PessoaController.pegaTodasAsPessoas)
	.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
	.get('/pessoas/excluidos/:id', PessoaController.restauraPessoa)
	.post('/pessoas', PessoaController.criaPessoa)
	.put('/pessoas/:id', PessoaController.atualizaPessoa)
	.delete('/pessoas/:id', PessoaController.apagaPessoa)
 
module.exports = router