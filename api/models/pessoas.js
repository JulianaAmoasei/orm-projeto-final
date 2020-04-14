'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pessoas = sequelize.define('Pessoas', {
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  Pessoas.associate = function(models) {
		// Pessoas.hasMany(models.Turmas)
		// Pessoas.hasMany(models.Matriculas) 
		// User.belongsTo(UserRole, {as: 'role'});
		// User.belongsTo(Company, {foreignKey: 'fk_companyname', targetKey: 'name'});
  };
  return Pessoas;
};

// modeloDeOrigem.hasOne(modeloAlvo) //contém um
// modeloDeOrigem.hasMany(modeloAlvo) //contém vários
// modeloAlvo.belongsTo(tabelaDeOrigem) //pertence a
