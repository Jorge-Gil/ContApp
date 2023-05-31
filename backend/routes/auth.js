import express from "express";
import { login } from "../controllers/auth.js";
import { crearComentario } from "../controllers/auth.js";
import { updateUsuario } from "../controllers/auth.js";
import { deleteUsuario } from "../controllers/auth.js";
import { deletecomentario } from "../controllers/auth.js";
import { getUsuarios } from "../controllers/auth.js";
import { crearPalabraClave } from "../controllers/auth.js";
import { getPalabrasClave } from "../controllers/auth.js";
import { deletePalabraClave } from "../controllers/auth.js";
import { updatePalabraClave } from "../controllers/auth.js";
import { getUsuario } from "../controllers/auth.js";
import { getComentarios } from "../controllers/auth.js";
import { getComentario } from "../controllers/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/comentar", crearComentario);
router.put("/updateUsuario/:usuarioId", updateUsuario);
router.delete("/deleteUsuario/:usuarioId", deleteUsuario);
router.delete("/deleteComentario/:comentarioId", deletecomentario);
router.get("/getUsuarios", getUsuarios);
router.post("/crearPalabraClave", crearPalabraClave);
router.get("/getPalabrasClave", getPalabrasClave);
router.delete("/deletePalabraClave/:palabraClaveId", deletePalabraClave);
router.put("/updatePalabraClave/:palabraClaveId", updatePalabraClave);
router.get("/getUsuario/:usuarioId", getUsuario);
router.get("/getComentarios", getComentarios);
router.get("/getComentario/:comentarioId", getComentario);


export default router;
