import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Usuario from "../models/Usuario.js";
import Comentario from "../models/Comentario.js";
import PalabraClave from "../models/PalabraClave.js";

export const register = async (req, res) => {
  try {
    const {
      primerNombre,
      segundoNombre,
      primerApellido,
      segundoApellido,
      cedula,
      correo,
      contrasenia,
      telefono,
      celular,
      direccion,
      fotoPath,
      especialidad,
      tipoUsuario,
      likes,
      dislikes,

    } = req.body;

    const salt = await bcrypt.genSalt();
    const contraseniaEncriptada = await bcrypt.hash(contrasenia, salt);

    const nuevoUsuario = new Usuario({
      primerNombre,
      segundoNombre,
      primerApellido,
      segundoApellido,
      cedula,
      correo,
      contrasenia: contraseniaEncriptada,
      telefono,
      celular,
      direccion,
      fotoPath,
      especialidad,
      tipoUsuario,
      likes,
      dislikes,

    });

    const usuarioGuardado = await nuevoUsuario.save();

    res.status(201).json(usuarioGuardado);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al registrar el usuario" });
  }
};

export const login = async (req, res) => {
  try {
    const { correo, contrasenia } = req.body;

    const usuario = await Usuario.findOne({ correo: correo });

    if (!usuario) {
      return res.status(400).json({ message: "El usuario no existe" });
    }

    const isMatch = await bcrypt.compare(contrasenia, usuario.contrasenia);

    if (!isMatch) {
      return res.status(400).json({ message: "Credenciales invalidas" });
    }
    const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET);
    delete usuario.contrasenia;
    res.status(200).json({ result: usuario, token });
  } catch (error) {
    res.status(500).json({ message: "Usuario o contraseña incorrectos" });
  }
};

export const updateUsuario = async (req, res) => {
  try {
    const { usuarioId } = req.params; 
    const updateData = req.body;

    const usuario = await Usuario.findByIdAndUpdate(usuarioId, updateData, {
      new: true,
    });

    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.status(200).json(usuario);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al actualizar el usuario" });
  }
};

export const deleteUsuario = async (req, res) => {
  try {
    const { usuarioId } = req.params;

    const usuario = await Usuario.findByIdAndDelete(usuarioId);

    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Se borran los comentarios asociados
    await Comentario.deleteMany({ usuario: usuario._id });

    res.status(200).json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al eliminar el usuario" });
  }
};

export const crearComentario = async (req, res) => {
  try {
    const { usuarioId, idPublicacion, comentario } = req.body;

    const usuario = await Usuario.findById(usuarioId);
    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const nuevoComentario = new Comentario({
      usuario: usuario._id, 
      idPublicacion,
      comentario,
    });

    const comentarioGuardado = await nuevoComentario.save();
    res.status(201).json(comentarioGuardado);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al crear el comentario" });
  }
};


export const deletecomentario = async (req, res) => {
  try {
    const {  comentarioId } = req.params;

    const comentario = await Comentario.findByIdAndDelete(comentarioId);

    if (!comentario) {
      return res.status(404).json({ message: "Comentario no encontrado" });
    }

    res.status(200).json({ message: "Comentario eliminado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al eliminar el comentario" });
  }
};

export const getComentarios = async (req, res) => {
  try {
    const comentarios = await Comentario.find();
    res.status(200).json(comentarios);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener los comentarios" });

  }
}

export const getComentario = async (req, res) => {
  try {
    const comentario= await Comentario.findById(req.params.comentarioId)
 
 

    if (!comentario) {
     
      return res.status(404).json({ message: "Comentario no encontrado" });
    }


    res.status(200).json(comentario);
  
} catch (error) {

  console.log(error);
  res.status(500).json({ message: "Error al obtener el Comentario" });
}
}


export const crearPalabraClave = async (req, res) => {

  try {
    const { palabra } = req.body;

    const nuevaPalabraClave = new PalabraClave({
      palabra,
    });

    const palabraClaveGuardada = await nuevaPalabraClave.save();
    res.status(201).json(palabraClaveGuardada);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al crear la palabra clave" });
  }
}

export const getPalabrasClave = async (req, res) => {
  try {
    const palabrasClave = await PalabraClave.find();
    res.status(200).json(palabrasClave);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener las palabras clave" });
  }
}

export const deletePalabraClave = async (req, res) => {

  try {
    const { palabraClaveId } = req.params;

    const palabraClave = await PalabraClave.findByIdAndDelete(palabraClaveId);

    if (!palabraClave) {
      return res.status(404).json({ message: "Palabra clave no encontrada" });
    }

    res.status(200).json({ message: "Palabra clave eliminada correctamente" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al eliminar la palabra clave" });
  }
}

export const updatePalabraClave = async (req, res) => {

  try {
 

    const { palabraId } = req.params; 
    const updateData = req.body;

    const palabraClave = await Usuario.findByIdAndUpdate(palabraId, updateData, {
      new: true,
    });

    if (!palabraClave) {
      return res.status(404).json({ message: "Palabra clave no encontrado" });
    }

    res.status(200).json(palabraClave);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al actualizar la palabra clave" });
  }
};




export const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener los usuarios" });
  }
}

export const getUsuario = async (req, res) => {
try{
  // const { usuarioId } = req.params;
 const usuario= await Usuario.findById(req.params.usuarioId)
 
 

    if (!usuario) {
     
      return res.status(404).json({ message: "Usuario no encontrado" });
    }


    res.status(200).json(usuario);
  
} catch (error) {

  console.log(error);
  res.status(500).json({ message: "Error al obtener el usuario" });
}

}