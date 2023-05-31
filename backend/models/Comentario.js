import mongoose from "mongoose";
const comentarioSchema = mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    idPublicacion: {
        type: String,
        required: true,
        min: 3,
        max: 30,
    },
    comentario: {
        type: String,
        required: true,
        min: 3,
        max: 300,
    },
    fecha: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model("Comentario", comentarioSchema);