import { Router } from "express";
import userRoutes from "./UserRoutes.js";
import resenasRoutes from "./resenasRoutes.js";
import peliculasRoutes from "./peliculasRoutes.js";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/resenas", resenasRoutes); 
routes.use("/peliculas", peliculasRoutes);
// routes.use("/roles",rolesRoutes);


export default routes;