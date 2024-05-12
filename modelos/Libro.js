const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Libro = sequelize.define('libros',{
    idLibro : {
        type :  DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true       
    },
    nombre : {
        type : DataTypes.STRING,
        allowNull: false
    }
});
module.exports = Libro;