import NiveisService from '../services/NiveisService';
 
class NiveisController {

	static async pegaTodosOsNiveis(req, res) {
		try {
			const todosOsNiveis = await NiveisService.pegaTodosOsNiveis()
			return res.status(200).json(todosOsNiveis)
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async pegaUmNivel(req, res) {
		const { id } = req.params
		try {
			const umNivel = await NiveisService.pegaUmNivel(id)
			return res.status(200).json(umNivel)
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async criaNivel(req, res) {
		const novoNivel = req.body;
		try {
			const novoNivelCriado = await NiveisService.criaNivel(novoNivel)
			return res.status(200).json(novoNivelCriado)
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	
	static async atualizaNivel(req, res) {
		const { id } = req.params
		const novasInfos = req.body;
		try {
			await NiveisService.atualizaNivel(id, novasInfos)
			const nivelAtualizado = await NiveisService.pegaUmNivel(id)			
			return res.status(200).json(nivelAtualizado)
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async apagaNivel(req, res) {
		const { id } = req.params
		try {
			await NiveisService.apagaNivel(id)
			return res.status(200).json({mensagem: `id ${id} deletado`})
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
}

export default NiveisController