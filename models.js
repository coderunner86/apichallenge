const {sequelize} = require('./db');
const {DataTypes, Model} = require('sequelize');
const User = sequelize.define('personaje', {
    id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
    imagen: {
        type: DataTypes.CHAR,    
        allowNull: true
    },
      nombre: {
        type: DataTypes.STRING,
        allowNull: true
      },
      edad: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      peso: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      historia: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      peliculas:{
        type: DataTypes.TEXT,
        allowNull: true
      }

// }, {
// 	sequelize, // We need to pass the connection instance
// 	modelName: 'personaje'
// 
});
// sequelize.sync();
module.exports = User