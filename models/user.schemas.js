const {checkSchema} = require('express-validator');
 const createUserSchema = checkSchema({
    nombreUsuario: {
        notEmpty: true,
        errorMessage: "El nombre es requerido!"
    },
    correo: {
        notEmpty:{
            errorMessage: "El correo es requerido!"   
        },
        isEmail:{
            errorMessage:"el correo debe ser valido"
        }
    },
    biografia: {
        notEmpty: true,
        errorMessage: "La biografia es requerida!"
    },
    email: {
        errorMessage: 'Email invalido!',
        isEmail: true
    },
    contrasenia: {
        isLength: {
            options: { min: 8 },
            errorMessage: 'La contraseña debe tener por lo menos 8 caracteres!'
        }
    }
});

module.exports=createUserSchema