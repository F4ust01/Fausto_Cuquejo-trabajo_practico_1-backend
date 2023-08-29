
const { obtenerPlaylist, crearUnaPlaylist, editarPlaylist, eliminarUnaPlaylist, obtenerUnaPlaylist } = require('../controllers/playlist.controllers');

const router = require('express').Router();

// ==========================================
//         Rutas para CRUD de Playlist
// ==========================================

//Obtener una Playlist
router.get('/one/:id', obtenerUnaPlaylist);
 
// Obtener todas las Playlist
router.get('/:idUsers', obtenerPlaylist);
 
// Crear una Playlist
router.post('/:idUsers', crearUnaPlaylist);
 
// Actualizar una Playlist
router.put('/:id', editarPlaylist);
 
// Eliminar una Playlist de forma lógica
router.delete('/:id', eliminarUnaPlaylist);

 
 module.exports = router;