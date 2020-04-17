const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()
 
router
	.get('/pessoas', PessoaController.pegaTodasAsPessoas)
	.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
	.post('/pessoas/restaura/:id', PessoaController.restauraPessoa)
	.post('/pessoas', PessoaController.criaPessoa)
	.post('/pessoas/:id/ativa', PessoaController.ativaPessoa)
	.post('/pessoas/:id/cancela', PessoaController.cancelaPessoa)
	.put('/pessoas/:id', PessoaController.atualizaPessoa)
	.delete('/pessoas/:id', PessoaController.apagaPessoa)
 
module.exports = router