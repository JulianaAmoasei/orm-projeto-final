import database from '../models'
 
class PessoasController {
 static async pegaTodasAsPessoas(req, res) {
   try {
     const todasAsPessoas = await database.Pessoas.findAll()
     return res.status(200).send(todasAsPessoas)
   } catch (error) {
     return res.status(500).send(error.message);
   }
 }
}
 
export default PessoasController