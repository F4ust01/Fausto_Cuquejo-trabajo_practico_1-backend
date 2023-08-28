
const { obtenerUser, crearUnUser, obtenerUnUser } = require('../controllers/User.controllers');

const router = require('express').Router();

// ==========================================
//         Rutas para CRUD de User
// ==========================================

//Obtener Un User
router.get('/api/:id', obtenerUnUser);
 
// Obtener todas las User
router.get('/api/', obtenerUser);
 
// Crear Un User
router.post('/api/', crearUnUser);

 
 module.exports = router;