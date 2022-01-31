const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("typeOfDiet", {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
