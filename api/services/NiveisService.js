import database from '../models';

class NiveisService {
	
  static async pegaTodosOsNiveis() {
    try {
      return database.Niveis.findAll();
    } catch (error) {
      throw error;
    }
	}

	static async pegaUmNivel(id) {
		try {
      return database.Niveis.findOne({ where: { id: Number(id) } });
    } catch (error) {
      throw error;
    }
	}

	static async criaNivel(novoNivel) {
    try {
      return database.Niveis.create(novoNivel)
    } catch (error) {
      throw error;
    }
	}
	
	static async atualizaNivel(id, infoAtualizada) {
		try {
      return database.Niveis.update(infoAtualizada, { where: { id: Number(id) } })
    } catch (error) {
      throw error;
    }
	}
		
	static async apagaNivel(id) {
		try {
      return database.Niveis.destroy({ where: { id: Number(id) } })
    } catch (error) {
      throw error;
    }
	}

}

export default NiveisService;
