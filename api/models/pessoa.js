'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pessoas = sequelize.define('Pessoas', {
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
		paranoid: true,
	});
  Pessoas.associate = function(models) {
		Pessoas.hasMany(models.Turmas, {
			foreignKey: 'docente_id'
		})
		Pessoas.hasMany(models.Matriculas, {
			foreignKey: 'estudante_id'
		})
	};
  return Pessoas;
};

//modeloDeOrigem.hasOne(modeloAlvo) 
	//adiciona um atributo modeloDeOrigemId ao modeloAlvo
//modeloDeOrigem.hasMany(modeloAlvo) //contém vários
	//adiciona um atributo modeloDeOrigemId ao modeloAlvo
//modeloAlvo.belongsTo(tabelaDeOrigem) 
	//adiciona um atributo tabelaDeOrigemId ao modelo alvo, e associa a ID como chava primária
