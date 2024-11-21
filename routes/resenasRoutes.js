import { Router } from "express";
import ResenasControllers from "../controllers/ResenasControllers.js";
const resenasControllers = new ResenasControllers();
import { validateLogin } from "../midlewares/validateLogin.js";
import validateAdmin from "../midlewares/validateAdmin.js";

const resenasRoutes = Router();

resenasRoutes.get("/", resenasControllers.getAllResenas);
resenasRoutes.get("/movie/:movieId", resenasControllers.getResenasByMovieId);

resenasRoutes.use(validateLogin);
resenasRoutes.post("/", resenasControllers.createResena);
resenasRoutes.use(validateAdmin);
resenasRoutes.put("/:id", resenasControllers.updateResena);
resenasRoutes.delete("/:id", resenasControllers.deleteResena);

export default resenasRoutes;
