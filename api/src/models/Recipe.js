const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sumary: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    score: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    healthScore: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });
};
