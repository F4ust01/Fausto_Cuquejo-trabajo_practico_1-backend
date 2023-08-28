const Canciones = require("./canciones");
const Playlist = require("./playlist");
const Users = require("./users");

const relaciones=()=>{
    Users.hasMany(Playlist,{foreignKey:'idUsers'});
    Playlist.belongsTo(Users,{foreignKey:'idUsers'});
    
    Playlist.hasMany(Canciones,{foreignKey:'idPlaylist'});
    Canciones.belongsTo(Playlist,{foreignKey:'idPlaylist'});

};
module.exports= relaciones;