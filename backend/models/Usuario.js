import mongoose from "mongoose";



const usuarioSchema = mongoose.Schema({

    primerNombre: {
        type: String,
        required: true,
        min: 3,
        max: 30,
    },
    segundoNombre: {
        type: String,
        required: false,
        min: 3,
        max: 30,
    },
    primerApellido: {
        type: String,
        required: true,
        min: 3,
        max: 30,
    },
    segundoApellido: {
        type: String,
        required: false,
        min: 3,
        max: 30,
    },
    cedula: {
        type: String,
        required: true,
        min: 3,
        max: 20,
    },
    correo: {
        type: String,
        required: true,
        min: 3,
        max: 50,
        unique: true,
    },
    contrasenia: {
        type: String,
        required: true,
        min: 3,
        max: 50,
    },
    telefono: {
        type: String,
        required: true,
        min: 3,
        max: 20,
    },
    celular: {
        type: String,
        required: true,
        min: 3,
        max: 20,
    },
    direccion: {
        type: String,
        required: true,
        min: 3,
        max: 50,
    },
    fotoPath: {
        type: String,
        default: "",
    },
    especialidad: {
        type: String,
        min: 3,
        max: 20,
    },
    tipoUsuario: {
        type: String,
        required: true,
        min: 3,
        max: 20,
    },
    likes: {
        type: Number,
        default: 0,
    },
    dislikes: {
        type: Number,
        default: 0,
    },

   
}, {timestamps: true});

const Usuario = mongoose.model("Usuario", usuarioSchema)
 

export default Usuario;