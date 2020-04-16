const { Router } = require('express')
const MatriculaController = require('../controllers/MatriculaController')

const router = Router()
 
router
	.get('/matriculas', MatriculaController.pegaTodasAsMatriculas)
	.get('/matriculas/:id', MatriculaController.pegaUmaMatricula)
	.get('/matriculas/excluidos/:id', MatriculaController.restauraMatricula)
	.post('/matriculas', MatriculaController.criaMatricula)
	.put('/matriculas/:id', MatriculaController.atualizaMatricula)
	.delete('/matriculas/:id', MatriculaController.apagaMatricula)
 
module.exports = router