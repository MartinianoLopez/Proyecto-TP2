import { Router } from "express";
import PeliculasControllers from "../controllers/PeliculasControllers.js";
const peliculasControllers = new PeliculasControllers();
import { validateLogin } from "../midlewares/validateLogin.js";
import validateAdmin from "../midlewares/validateAdmin.js";

const peliculasRoutes = Router();

peliculasRoutes.get("/", peliculasControllers.getAllPeliculas);
peliculasRoutes.get("/:id", peliculasControllers.getPeliculaById);

peliculasRoutes.use(validateLogin);
peliculasRoutes.use(validateAdmin);
peliculasRoutes.post("/", peliculasControllers.createPelicula);
peliculasRoutes.put("/:id", peliculasControllers.updatePelicula);
peliculasRoutes.delete("/:id", peliculasControllers.deletePelicula);

export default peliculasRoutes;
