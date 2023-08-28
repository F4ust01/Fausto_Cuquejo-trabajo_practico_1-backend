
const { obtenerCancion, crearUnaCancion, obtenerUnaCancion } = require('../controllers/Cancion.controllers');

const router = require('express').Router();

// ==========================================
//         Rutas para CR de Cancion
// ==========================================

//Obtener Un Cancion
router.get('/api/:id', obtenerUnaCancion);
 
// Obtener todas las Cancion
router.get('/api/', obtenerCancion);
 
// Crear Un Cancion
router.post('/api/', crearUnaCancion);

 
 module.exports = router;