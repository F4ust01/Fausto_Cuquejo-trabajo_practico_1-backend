const { Sequelize, DataTypes, Model } = require('sequelize')
require('dotenv').config();
const {
    DB_NAME,
    DB_USER,
    DB_HOST,
    DB_PORT,
    DB_DIALECT
} = process.env

const sequelize = new Sequelize(DB_NAME, DB_USER, '' ,{
    host : DB_HOST,
    dialect : DB_DIALECT
})

const conectarDB = async () => {

    try {
        await sequelize.authenticate()
        console.log('Base de datos Conectada');
    } catch (error) {
        console.log('ERROR AL CONECTAR DB: ', error);
    }

};


module.exports = {sequelize, DataTypes, Model, conectarDB}