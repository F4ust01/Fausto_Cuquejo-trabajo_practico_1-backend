const { DataTypes, sequelize } = require('../database');

const Users = sequelize.define('Users', {
    // Model attributes are defined here
    idUsers: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
    },
    nombreUsuario: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    contrasenia: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    biografia: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'Users'
});

// Crear tabla si no existe ({force: true} borra y crea la tabla)
Users.sync({ force: false }).then(() => {
    console.log('Tabla de Users creada');
});

module.exports = Users;