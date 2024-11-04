import { Router } from "express";
import userRoutes from "./userRoutes.js";
import resenasRoutes from "./resenasRoutes.js";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/resenas", resenasRoutes); 
// routes.use("/roles",rolesRoutes);


export default routes;