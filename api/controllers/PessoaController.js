const database = require('../models')
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
			const umaPessoa = await pessoaService.pegaUmRegistro({ id })
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
      await pessoaService.atualizaRegistro(id, {ativo: true})
      return res.status(200)
        .json({message: `matrículas ref. estudante id ${id} ativada`})
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async cancelaPessoa(req, res) {
    const { id } = req.params
    try {
      database.sequelize.transaction(async (transacao) => {
        try {
          await pessoaService.atualizaRegistro(id, {ativo: false}, transacao)
          await matriculaService
            .atualizaRegistros({
              estudante_id: id 
            }, 
            { status: 'cancelado' }, 
            transacao)        
          return res.status(200)
            .json({
              message: `matrículas ref. estudante id ${id} canceladas`
            })
        } catch (error) {
          transacao.rollback()
          return res.status(500).json(error.message)
        }
      })
    } catch(error){
      throw error
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
  
  static async pegaTodasAsMatriculas(req, res) {
    const { id } = req.params 
		try {
      const todasAsMatriculas = await matriculaService
        .pegaTodosOsRegistros({ estudante_id: id })
			return res.status(200).json(todasAsMatriculas)
		} catch (error) {
			return res.status(500).json(error.message)
		}
  }
  
  static async pegaUmaMatricula(req, res) {
		const { id, matriculaId } = req.params
		try {
      const umaMatricula = await matriculaService
        .pegaUmRegistro({id: matriculaId, estudante_id: id})
			return res.status(200).json(umaMatricula)
		} catch (error) {
      console.log(error)
			return res.status(500).json(error.message)
		}
  }
  
  static async criaMatricula(req, res) {
    const { id } = req.params 
		const novaMatricula = { ...req.body, estudante_id: id }
		try {
			const novaMatriculaCriada = await matriculaService.criaRegistro(novaMatricula)
			return res.status(200).json(novaMatriculaCriada)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}
	
	static async atualizaMatricula(req, res) {
		const { id, matriculaId } = req.params
		const novasInfos = { ...req.body, id: matriculaId, estudante_id: id }
		try {
      const matriculaAtualizada = await matriculaService
        .atualizaRegistros({ 
          id: matriculaId, 
          estudante_id: id 
        }, 
        novasInfos)
			return res.status(200).json(matriculaAtualizada)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}

	static async apagaMatricula(req, res) {
    const { id, matriculaId } = req.params
    try {
			await matriculaService.apagaRegistros({ id: matriculaId, estudante_id: id })
			return res.status(200).json({mensagem: `id ${id} deletado`})
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}
}

module.exports = PessoaController

//REFAÇÃO CÓDIGO ALTERAÇÃO DE STATUS

// const alteraStatusPessoa = async (id, status, ativo) => {
//   await pessoaService.atualizaRegistro(id, { ativo })
//   await matriculaService.atualizaRegistros({estudante_id: id}, { status } )
// }

  // static async ativaPessoa(req, res) {
  //   const { id } = req.params
  //   try {
  //     await alteraStatusPessoa(id, 'confirmado', true)
  //     return res.status(200).json({message: `matrículas ref. estudante numero ${id} ativadas`})
  //   } catch (error) {
  //     return res.status(500).json(error.message)
  //   }
  // }

  // static async cancelaPessoa(req, res) {
  //   const { id } = req.params
  //   try {
  //     await alteraStatusPessoa(id, 'cancelado', false)
  //     return res.status(200).json({message: `matrículas ref. estudante numero ${id} canceladas`})
  //   } catch (error) {
  //     return res.status(500).json(error.message)
  //   }
  // }
