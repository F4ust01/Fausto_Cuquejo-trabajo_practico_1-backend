const Playlist = require("../models/Playlist");

const ctrlPlaylist = {};

// ==========================================
//         Rutas para CRUD de playlist
// ==========================================

// Obtener todas las playlist

ctrlPlaylist.obtenerPlaylist= async (req, res) => {
    try {
     const todasLasPlaylist = await Playlist.findAll()
     if (!todasLasPlaylist.length) {
         throw new Error("No hay Playlist")
     }
     return res.json(todasLasPlaylist)
    } catch (error) {
     console.error(error)
    } 
 }

// Obtener una Playlist

ctrlPlaylist.obtenerUnaPlaylist= async (req, res) => {
    const {id} = req.params
    try {
     const unaPlaylist = await Playlist.findByPk(id)
     if (!unaPlaylist) {
         throw new Error("No existe la Playlist")
     }
     return res.json(unaPlaylist)
    } catch (error) {
     console.error(error)
    } 
 }

// Crear una Playlist

ctrlPlaylist.crearUnaPlaylist= async (req, res) => {
    
    const { nombre, fecha_hora_creacion, descripcion, creador, genero } = req.body

    try {
     const nuevaPlaylist = await Playlist.create({
        nombre, 
        fecha_hora_creacion,  
        descripcion, 
        creador, 
        genero, 
        codigo: new Date().getTime()
     })
     if (!nuevaPlaylist) {
         throw new Error("No se ha podido crear la Playlist")
     }
     return res.json({nuevaPlaylist, message: "Playlist creada correctamente"})
    } catch (error) {
     console.error(error)
    } 
 }


// Actualizar una Playlist

ctrlPlaylist.editarPlaylist= async (req, res) => {
    
    const { nombre, fecha_hora_creacion, descripcion, creador, genero } = req.body
    const {id} = req.params
    try {
     const editarPlaylist = await Playlist.update({
        nombre, 
        fecha_hora_creacion,  
        descripcion, 
        creador, 
        genero 
     },
     {where : { idPlaylist: id}})
     if (!editarPlaylist) {
         throw new Error("No se ha podido editar la Playlist")
     }
     return res.json(editarPlaylist)
    } catch (error) {
     console.error(error)
    } 
 }

// Eliminar una Playlist de forma lógica

ctrlPlaylist.eliminarUnaPlaylist= async (req, res) => {
    const {id} = req.params
    try {
     const PlaylistEliminada = await Playlist.destroy({where : {idPlaylist:id}})
     if (!PlaylistEliminada) {
         throw new Error("No se ha podido eliminar la Playlist")
     }
     return res.json(PlaylistEliminada)
    } catch (error) {
     console.error(error)
    } 
 }



module.exports = ctrlPlaylist;