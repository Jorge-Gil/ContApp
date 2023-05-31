import mongoose from "mongoose";

const palabraClaveSchema = mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
   
},
  palabra: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100,
  },
});

const PalabraClave = mongoose.model("PalabraClave", palabraClaveSchema);

export default PalabraClave;

// export default mongoose.model("PalabraClave", palabraClaveSchema);
