const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()
 
router
	.get('/pessoas', PessoaController.pegaTodasAsPessoas)
  .get('/pessoas/:id', PessoaController.pegaUmaPessoa)
  .get('/pessoas/:id/matricula', PessoaController.pegaTodasAsMatriculas)
  .get('/pessoas/:id/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
  
	.post('/pessoas', PessoaController.criaPessoa)
	.post('/pessoas/:id/matricula', PessoaController.criaMatricula)
  
	.post('/pessoas/:id/ativa', PessoaController.ativaPessoa)
	.post('/pessoas/:id/cancela', PessoaController.cancelaPessoa)
  
  .post('/pessoas/restaura/:id', PessoaController.restauraPessoa)
	.put('/pessoas/:id', PessoaController.atualizaPessoa)
  .delete('/pessoas/:id', PessoaController.apagaPessoa)
  
	.put('/pessoas/:id/matricula/:matriculaId', PessoaController.atualizaMatricula)
	.delete('/pessoas/:id/matricula/:matriculaId', PessoaController.apagaMatricula)
 
module.exports = router