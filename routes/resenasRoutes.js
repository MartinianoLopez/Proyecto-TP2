import { Router } from "express";
import ResenasControllers from "../controllers/ResenasControllers.js";
const resenasControllers = new ResenasControllers();

const resenasRoutes = Router();

resenasRoutes.get("/", resenasControllers.getAllResenas);
resenasRoutes.get("/movie/:movieId", resenasControllers.getResenasByMovieId);
resenasRoutes.post("/", resenasControllers.createResena);
resenasRoutes.put("/:id", resenasControllers.updateResena);
resenasRoutes.delete("/:id", resenasControllers.deleteResena);

export default resenasRoutes;
