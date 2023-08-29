const Users = require("../models/users");

const ctrlUser = {};

// ==========================================
//         Rutas para CR de User
// ==========================================

// Obtener todos las User

ctrlUser.obtenerUser= async (req, res) => {
    try {
     const todasLasUser = await Users.findAll()
     if (!todasLasUser.length) {
         throw new Error("No hay User")
     }
     return res.json(todasLasUser)
    } catch (error) {
     console.error(error)
    } 
 }

// Obtener un User

ctrlUser.obtenerUnUser= async (req, res) => {
    const {id} = req.params
    try {
     const unaUser = await Users.findByPk(id)
     if (!unaUser) {
         throw new Error("No existe el User")
     }
     return res.json(unaUser)
    } catch (error) {
     console.error(error)
    } 
 }

// Crear un User

ctrlUser.crearUnUser= async (req, res) => {
    
    const { nombreUsuario, correo, contrasenia, biografia } = req.body

    try {
     const nuevaUser = await Users.create({
        nombreUsuario, 
        correo, 
        contrasenia, 
        biografia
     })
     if (!nuevaUser) {
         throw new Error("No se ha podido crear el User")
     }
     return res.json({nuevaUser, message: "User creado correctamente"})
    } catch (error) {
     console.error(error)
    } 
 }



module.exports = ctrlUser;