import TurmasService from '../services/TurmasService';
 
class TurmasController {

	static async pegaTodasAsTurmas(req, res) {
		try {
			const todasAsTurmas = await TurmasService.pegaTodasAsTurmas()
			return res.status(200).json(todasAsTurmas)
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async pegaUmaTurma(req, res) {
		const { id } = req.params
		try {
			const umaTurma = await TurmasService.pegaUmaTurma(id)
			return res.status(200).json(umaTurma)
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async criaTurma(req, res) {
		const novaTurma = req.body;
		try {
			const novaTurmaCriada = await TurmasService.criaTurma(novaTurma)
			return res.status(200).json(novaTurmaCriada)
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	
	static async atualizaTurma(req, res) {
		const { id } = req.params
		const novasInfos = req.body;
		try {
			await TurmasService.atualizaTurma(id, novasInfos)
			const turmaAtualizada = await TurmasService.pegaUmaTurma(id)			
			return res.status(200).json(turmaAtualizada)
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async apagaTurma(req, res) {
		const { id } = req.params
		try {
			await TurmasService.apagaTurma(id)
			return res.status(200).json({mensagem: `id ${id} deletado`})
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
}

export default TurmasController