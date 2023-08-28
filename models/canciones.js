const { DataTypes, sequelize } = require('../database');

const Canciones = sequelize.define('Canciones', {
    // Model attributes are defined here
    idCancion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
    },
    titulo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    fecha_lanzamiento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    artista: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    idPlaylist: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    genero: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    album: {
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
    tableName: 'Canciones'
});

// Crear tabla si no existe ({force: true} borra y crea la tabla)
Canciones.sync({ force: false }).then(() => {
    console.log('Tabla de Canciones creada');
});

module.exports = Canciones;