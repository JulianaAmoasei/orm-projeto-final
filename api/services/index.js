const database = require('../models')
const modelos = database.sequelize.models

class Service {
  constructor(nomeDoModelo){
  	this.nomeDoModelo = nomeDoModelo
	}
	
	async pegaTodosOsRegistros() {
		try {
			return modelos[this.nomeDoModelo].findAll()
		} catch (error) {
			throw error
		}
	}

	async pegaUmRegistro(id) {
		try {
      return modelos[this.nomeDoModelo].findOne({ where: { id: Number(id) } })
    } catch (error) {
      throw error
    }
	}

  async criaRegistro(dados) {
		try {
			return modelos[this.nomeDoModelo].create(dados)
		} catch (error) {
			throw error
		}
	}
	
	async atualizaRegistro(id, dadosAtualizados, transacao = {}) {
		try {
      return modelos[this.nomeDoModelo].update(dadosAtualizados, { where: { id: Number(id)}}, transacao )
    } catch (error) {
      throw error
    }
	}

  async atualizaRegistros(where, dadosAtualizados, transacao = {}) {
		try {
      return modelos[this.nomeDoModelo].update(dadosAtualizados, { where: { ...where }}, transacao )
    } catch (error) {
      throw error
    }
	}
		
	async apagaRegistro(id) {
		try {
      return modelos[this.nomeDoModelo].destroy({ where: { id: Number(id) } })
    } catch (error) {
      throw error
    }
	}

	async restauraRegistro(id) {
		try {
			return modelos[this.nomeDoModelo].restore({ where: { id: Number(id) } })
    } catch (error) {
      throw error
    }
	}
}

module.exports = Service