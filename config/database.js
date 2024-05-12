const Sequelize =  require('sequelize');

const sequelize = new Sequelize('bibliadb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps : false
    }
});
//exportar
module.exports = sequelize;