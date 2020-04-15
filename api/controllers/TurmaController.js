const Services = require('../services')
const turmaService = new Services('Turmas')
 
class TurmaController {

	static async pegaTodasAsTurmas(req, res) {
		try {
			const todasAsTurmas = await turmaService.pegaTodosOsRegistros()
			return res.status(200).json(todasAsTurmas)
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async pegaUmaTurma(req, res) {
		const { id } = req.params
		try {
			const umaTurma = await turmaService.pegaUmRegistro(id)
			return res.status(200).json(umaTurma)
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async criaTurma(req, res) {
		const novaTurma = req.body;
		try {
			const novaTurmaCriada = await turmaService.criaRegistro(novaTurma)
			return res.status(200).json(novaTurmaCriada)
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	
	static async atualizaTurma(req, res) {
		const { id } = req.params
		const novasInfos = req.body;
		try {
			const turmaAtualizada = await turmaService.atualizaRegistro(id, novasInfos)
			return res.status(200).json(turmaAtualizada)
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async apagaTurma(req, res) {
		const { id } = req.params
		try {
			await turmaService.apagaRegistro(id)
			return res.status(200).json({mensagem: `id ${id} deletado`})
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
}

module.exports = TurmaController