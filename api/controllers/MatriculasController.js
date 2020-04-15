import database from '../models'
 
class MatriculasController {

	static async pegaTodasAsMatriculas(req, res) {
		try {
			const todasAsMatriculas = await database.Matriculas.findAll()
			return res.status(200).json(todasAsMatriculas)
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async pegaUmaMatricula(req, res) {
		const { id } = req.params
		try {
			const umaMatricula = await database.Matriculas.findOne({ where: { id: Number(id) } })
			return res.status(200).json(umaMatricula)
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async criaMatricula(req, res) {
		const novaMatricula = req.body;
		try {
			const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
			return res.status(200).json(novaMatriculaCriada)
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	
	static async atualizaMatricula(req, res) {
		const { id } = req.params
		const novasInfos = req.body;
		try {
			await database.Matriculas.update(novasInfos, { where: { id: Number(id) } })
			const matriculaAtualizada = await database.Matriculas.findOne({ where: { id: Number(id) } })			
			return res.status(200).json(matriculaAtualizada)
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async apagaMatricula(req, res) {
		const { id } = req.params
		try {
			await database.Matriculas.destroy({ where: { id: Number(id) } })
			return res.status(200).json({mensagem: `id ${id} deletado`})
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
}

export default MatriculasController