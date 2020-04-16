const Services = require('../services')
const matriculaService = new Services('Matriculas')
 
class MatriculaController {

	static async pegaTodasAsMatriculas(req, res) {
		try {
			const todasAsMatriculas = await matriculaService.pegaTodosOsRegistros()
			return res.status(200).json(todasAsMatriculas)
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async pegaUmaMatricula(req, res) {
		const { id } = req.params
		try {
			const umaMatricula = await matriculaService.pegaUmRegistro(id)
			return res.status(200).json(umaMatricula)
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async criaMatricula(req, res) {
		const novaMatricula = req.body;
		try {
			const novaMatriculaCriada = await matriculaService.criaRegistro(novaMatricula)
			return res.status(200).json(novaMatriculaCriada)
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	
	static async atualizaMatricula(req, res) {
		const { id } = req.params
		const novasInfos = req.body;
		try {
			const matriculaAtualizada = await matriculaService.atualizaRegistro(id, novasInfos)
			return res.status(200).json(matriculaAtualizada)
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async apagaMatricula(req, res) {
		const { id } = req.params
		try {
			await matriculaService.apagaRegistro(id)
			return res.status(200).json({mensagem: `id ${id} deletado`})
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async restauraMatricula(req, res) {
		const { id } = req.params
		try {
			const registroRestaurado = await matriculaService.restauraRegistro(id)
			return res.status(200).json(registroRestaurado)
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
}

module.exports = MatriculaController