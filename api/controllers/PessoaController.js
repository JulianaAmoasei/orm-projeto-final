const Services = require('../services')
const pessoaService = new Services('Pessoas')

class PessoaController {

	static async pegaTodasAsPessoas(req, res) {
		try {
			const todasAsPessoas = await pessoaService.pegaTodosOsRegistros()
			return res.status(200).json(todasAsPessoas)
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async pegaUmaPessoa(req, res) {
		const { id } = req.params
		try {
			const umaPessoa = await pessoaService.pegaUmRegistro(id)
			return res.status(200).json(umaPessoa)
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async criaPessoa(req, res) {
		const novaPessoa = req.body;
		try {
			const novaPessoaCriada = await pessoaService.criaRegistro(novaPessoa)
			return res.status(200).json(novaPessoaCriada)
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	
	static async atualizaPessoa(req, res) {
		const { id } = req.params
		const novasInfos = req.body;
		try {
			const pessoaAtualizada = await pessoaService.atualizaRegistro(id, novasInfos)
			return res.status(200).json(pessoaAtualizada)
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async apagaPessoa(req, res) {
		const { id } = req.params
		try {
			await pessoaService.apagaRegistro(id)
			return res.status(200).json({mensagem: `id ${id} deletado`})
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
}

module.exports = PessoaController