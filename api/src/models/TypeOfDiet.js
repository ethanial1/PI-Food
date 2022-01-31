const { DataTypes } = require('sequelize');

sequelize.define('typeOfDiet', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})