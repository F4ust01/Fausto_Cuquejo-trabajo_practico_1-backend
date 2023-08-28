const { DataTypes, sequelize } = require('../database');

const Playlist = sequelize.define('Playlist', {
    // Model attributes are defined here
    idPlaylist: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
    },
    codigo: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        defaultValue: new Date().getTime()
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    fecha_hora_creacion: {
        type: DataTypes.DATE,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    creador: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    genero: {
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
    tableName: 'playlist'
});

// Crear tabla si no existe ({force: true} borra y crea la tabla)
Playlist.sync({ force: false }).then(() => {
    console.log('Tabla de Playlist creada');
});

module.exports = Playlist;