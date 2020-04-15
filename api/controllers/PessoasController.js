import PessoasService from '../services/PessoasService';
 
class PessoasController {

	static async pegaTodasAsPessoas(req, res) {
		try {
			const todasAsPessoas = await PessoasService.pegaTodasAsPessoas()
			return res.status(200).json(todasAsPessoas)
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async pegaUmaPessoa(req, res) {
		const { id } = req.params
		try {
			const umaPessoa = await PessoasService.pegaUmaPessoa(id)
			return res.status(200).json(umaPessoa)
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async criaPessoa(req, res) {
		const novaPessoa = req.body;
		try {
			const novaPessoaCriada = await PessoasService.criaPessoa(novaPessoa)
			return res.status(200).json(novaPessoaCriada)
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	
	static async atualizaPessoa(req, res) {
		const { id } = req.params
		const novasInfos = req.body;
		try {
			await PessoasService.atualizaPessoa(id, novasInfos)
			const pessoaAtualizada = await PessoasService.pegaUmaPessoa(id)			
			return res.status(200).json(pessoaAtualizada)
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async apagaPessoa(req, res) {
		const { id } = req.params
		try {
			await PessoasService.apagaPessoa(id)
			return res.status(200).json({mensagem: `id ${id} deletado`})
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
}

export default PessoasController