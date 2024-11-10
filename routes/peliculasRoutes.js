import { Router } from "express";
import PeliculasControllers from "../controllers/PeliculasControllers.js";
const peliculasControllers = new PeliculasControllers();

const peliculasRoutes = Router();

peliculasRoutes.get("/", peliculasControllers.getAllPeliculas);
peliculasRoutes.get("/:id", peliculasControllers.getPeliculaById);
peliculasRoutes.post("/", peliculasControllers.createPelicula);
peliculasRoutes.put("/:id", peliculasControllers.updatePelicula);
peliculasRoutes.delete("/:id", peliculasControllers.deletePelicula);

export default peliculasRoutes;
