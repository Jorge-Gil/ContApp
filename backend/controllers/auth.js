import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Usuario from "../models/Usuario.js";

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
