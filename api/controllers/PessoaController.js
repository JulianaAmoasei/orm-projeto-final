const Services = require('../services')
const pessoaService = new Services('Pessoas')
const matriculaService = new Services('Matriculas')

class PessoaController {

	static async pegaTodasAsPessoas(req, res) {
		try {
			const todasAsPessoas = await pessoaService.pegaTodosOsRegistros()
			return res.status(200).json(todasAsPessoas)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}

	static async pegaUmaPessoa(req, res) {
		const { id } = req.params
		try {
			const umaPessoa = await pessoaService.pegaUmRegistro(id)
			return res.status(200).json(umaPessoa)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}

	static async criaPessoa(req, res) {
		const novaPessoa = req.body
		try {
			const novaPessoaCriada = await pessoaService.criaRegistro(novaPessoa)
			return res.status(200).json(novaPessoaCriada)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}
	
	static async atualizaPessoa(req, res) {
		const { id } = req.params
		const novasInfos = req.body
		try {
			const pessoaAtualizada = await pessoaService.atualizaRegistro(id, novasInfos)
			return res.status(200).json(pessoaAtualizada)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}

	static async apagaPessoa(req, res) {
		const { id } = req.params
		try {
			await pessoaService.apagaRegistro(id)
			return res.status(200).json({mensagem: `id ${id} deletado`})
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}

  static async ativaPessoa(req, res) {
    const { id } = req.params
    try {
      const estudante = await pessoaService.atualizaRegistro(id, {ativo: true})
      await matriculaService.atualizaRegistros({estudante_id: id}, {status: 'confirmado'})        
      return res.status(200).json({message: `matrículas ref. estudante ${estudante.nome} canceladas`})
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async cancelaPessoa(req, res) {
    const { id } = req.params
    try {
      const estudante = await pessoaService.atualizaRegistro(id, {ativo: false})
      await matriculaService.atualizaRegistros({estudante_id: id}, {status: 'cancelado'})        
      return res.status(200).json({message: `matrículas ref. estudante ${estudante.nome} canceladas`})
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

	static async restauraPessoa(req, res) {
		const { id } = req.params
		try {
			const registroRestaurado = await pessoaService.restauraRegistro(id)
			return res.status(200).json(registroRestaurado)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}

}

module.exports = PessoaController