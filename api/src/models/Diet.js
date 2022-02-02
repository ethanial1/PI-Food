const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("diet", {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false
  });
};
