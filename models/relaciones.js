const Canciones = require("./canciones");
const Playlist = require("./playlist");
const Users = require("./users");
const {sequelize} = require("../database")

const relaciones=()=>{
    Users.hasMany(Playlist,{foreignKey:'idUsers'});
    Playlist.belongsTo(Users,{foreignKey:'idUsers'});
    
    Playlist.hasMany(Canciones,{foreignKey:'idPlaylist'});
    Canciones.belongsTo(Playlist,{foreignKey:'idPlaylist'});

sequelize.models = {
    Users,
    Playlist,
    Canciones
}

};
module.exports= relaciones;