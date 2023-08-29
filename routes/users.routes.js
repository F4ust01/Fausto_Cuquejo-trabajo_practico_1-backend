 
const { obtenerUser, crearUnUser, obtenerUnUser } = require('../controllers/users.controllers');
const createUserSchema =require('../models/user.schemas');
const validateSchema =require('../middlewares/validador');
const router = require('express').Router();

// ==========================================
//         Rutas para CRUD de User
// ==========================================

//Obtener Un User
router.get('/:id', obtenerUnUser);
 
// Obtener todas las User
router.get('/', obtenerUser);
 
// Crear Un User
router.post('/',createUserSchema,validateSchema, crearUnUser);

 
 module.exports = router;