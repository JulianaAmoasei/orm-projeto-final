const database = require('../models')

class TurmasService {
	
  static async pegaTodasAsTurmas() {
    try {
      return database.Turmas.findAll();
    } catch (error) {
      throw error;
    }
	}

	static async pegaUmaTurma(id) {
		try {
      return database.Turmas.findOne({ where: { id: Number(id) } });
    } catch (error) {
      throw error;
    }
	}

	static async criaTurma(novaTurma) {
    try {
      return database.Turmas.create(novaTurma)
    } catch (error) {
      throw error;
    }
	}
	
	static async atualizaTurma(id, infoAtualizada) {
		try {
      return database.Turmas.update(infoAtualizada, { where: { id: Number(id) } })
    } catch (error) {
      throw error;
    }
	}
		
	static async apagaTurma(id) {
		try {
      return database.Turmas.destroy({ where: { id: Number(id) } })
    } catch (error) {
      throw error;
    }
	}
}

module.exports = TurmasService;
