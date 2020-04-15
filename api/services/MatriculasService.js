import database from '../models';

class MatriculasService {
	
  static async pegaTodasAsMatriculas() {
    try {
      return database.Matriculas.findAll();
    } catch (error) {
      throw error;
    }
	}

	static async pegaUmaMatricula(id) {
		try {
      return database.Matriculas.findOne({ where: { id: Number(id) } });
    } catch (error) {
      throw error;
    }
	}

	static async criaMatricula(novaMatricula) {
    try {
      return database.Matriculas.create(novaMatricula)
    } catch (error) {
      throw error;
    }
	}
	
	static async atualizaMatricula(id, infoAtualizada) {
		try {
      return database.Matriculas.update(infoAtualizada, { where: { id: Number(id) } })
    } catch (error) {
      throw error;
    }
	}
		
	static async apagaMatricula(id) {
		try {
      return database.Matriculas.destroy({ where: { id: Number(id) } })
    } catch (error) {
      throw error;
    }
	}

}

export default MatriculasService;
