import database from '../models';

class PessoasService {
	
  static async pegaTodasAsPessoas() {
    try {
      return database.Pessoas.findAll();
    } catch (error) {
      throw error;
    }
	}

	static async pegaUmaPessoa(id) {
		try {
      return database.Pessoas.findOne({ where: { id: Number(id) } });
    } catch (error) {
      throw error;
    }
	}

	static async criaPessoa(novaPessoa) {
    try {
      return database.Pessoas.create(novaPessoa)
    } catch (error) {
      throw error;
    }
	}
	
	static async atualizaPessoa(id, infoAtualizada) {
		try {
      return database.Pessoas.update(infoAtualizada, { where: { id: Number(id) } })
    } catch (error) {
      throw error;
    }
	}
		
	static async apagaPessoa(id) {
		try {
			return database.sequelize.transaction(async function(t) {
				await database.Pessoas.destroy({ where: { id: Number(id) }, transaction: t })
				await database.Matriculas.findAll({ where: { estudante_id: Number(id) }, transaction: t })
			})
		} catch (error) {
			t.rollback()
			throw error;
		}
	}
	// static async apagaPessoa(id) {
	// 	try {
  //     return database.Pessoas.destroy({ where: { id: Number(id) } })
  //   } catch (error) {
  //     throw error;
  //   }
	// }

}

export default PessoasService;
