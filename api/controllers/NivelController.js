const Services = require('../services')
const nivelService = new Services('Niveis')

class NivelController {

	static async pegaTodosOsNiveis(req, res) {
		try {
			const todosOsNiveis = await nivelService.pegaTodosOsRegistros()
			return res.status(200).json(todosOsNiveis)
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async pegaUmNivel(req, res) {
		const { id } = req.params
		try {
			const umNivel = await nivelService.pegaUmRegistro(id)
			return res.status(200).json(umNivel)
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async criaNivel(req, res) {
		const novoNivel = req.body;
		try {
			const novoNivelCriado = await nivelService.criaRegistro(novoNivel)
			return res.status(200).json(novoNivelCriado)
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	
	static async atualizaNivel(req, res) {
		const { id } = req.params
		const novasInfos = req.body;
		try {
			const nivelAtualizado = await nivelService.atualizaRegistro(id, novasInfos)
			return res.status(200).json(nivelAtualizado)
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async apagaNivel(req, res) {
		const { id } = req.params
		try {
			await nivelService.apagaRegistro(id)
			return res.status(200).json({mensagem: `id ${id} deletado`})
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
}

module.exports = NivelController