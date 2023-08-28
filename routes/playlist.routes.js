
const { obtenerPlaylist, crearUnaPlaylist, editarPlaylist, eliminarUnaPlaylist, obtenerUnaPlaylist } = require('../controllers/playlist.controllers');

const router = require('express').Router();

// ==========================================
//         Rutas para CRUD de Playlist
// ==========================================

//Obtener una Playlist
router.get('/api/:id', obtenerUnaPlaylist);
 
// Obtener todas las Playlist
router.get('/api/', obtenerPlaylist);
 
// Crear una Playlist
router.post('/api/', crearUnaPlaylist);
 
// Actualizar una Playlist
router.put('/api/:id', editarPlaylist);
 
// Eliminar una Playlist de forma lógica
router.delete('/api/:id', eliminarUnaPlaylist);

 
 module.exports = router;