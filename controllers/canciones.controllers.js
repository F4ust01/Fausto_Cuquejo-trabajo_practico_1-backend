const Canciones = require("../models/Cancion");

const ctrlCancion = {};

// ==========================================
//         Rutas para CR de Cancion
// ==========================================

// Obtener todos las Canciones

ctrlCancion.obtenerCanciones= async (req, res) => {
    try {
     const todasLasCanciones = await Canciones.findAll()
     if (!todasLasCanciones.length) {
         throw new Error("No hay Canciones")
     }
     return res.json(todasLasCanciones)
    } catch (error) {
     console.error(error)
    } 
 }

// Obtener un Cancion

ctrlCancion.obtenerUnCancion= async (req, res) => {
    const {id} = req.params
    try {
     const unaCancion = await Canciones.findByPk(id)
     if (!unaCancion) {
         throw new Error("No existe el Cancion")
     }
     return res.json(unaCancion)
    } catch (error) {
     console.error(error)
    } 
 }

// Crear un Cancion

ctrlCancion.crearUnCancion= async (req, res) => {
    
    const { titulo, fecha_lanzamiento, artista, genero, album } = req.body

    try {
     const nuevaCancion = await Canciones.create({
        titulo,
        fecha_lanzamiento, 
        artista, 
        genero, 
        album
     })
     if (!nuevaCancion) {
         throw new Error("No se ha podido crear la Cancion")
     }
     return res.json({nuevaCancion, message: "Cancion creada correctamente"})
    } catch (error) {
     console.error(error)
    } 
 }



module.exports = ctrlCancion;