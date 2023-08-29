
const /* { obtenerCancion, crearUnaCancion, obtenerUnaCancion } */ ctrl = require('../controllers/canciones.controllers');

const router = require('express').Router();

// ==========================================
//         Rutas para CR de Cancion
// ==========================================

//Obtener Un Cancion
router.get('/:id', ctrl.obtenerUnaCancion);
 
// Obtener todas las Cancion
router.get('/', ctrl.obtenerCanciones);
 
// Crear Un Cancion
router.post('/', ctrl.crearUnaCancion);

 
 module.exports = router;