import { Router } from "express";
import UserControllers from "../controllers/UserControllers.js";
import { validateLogin } from "../midlewares/validateLogin.js";
import validateAdmin from "../midlewares/validateAdmin.js";

const userControllers = new UserControllers();

const userRoutes = Router();

userRoutes.post("/", userControllers.createUser); 
userRoutes.post("/login", userControllers.login); 
userRoutes.get("/me", userControllers.getMe);

userRoutes.use(validateLogin);
userRoutes.use(validateAdmin);
userRoutes.get("/", userControllers.getAllUsers);
userRoutes.get("/:id", userControllers.getUserById);
userRoutes.put("/:id", userControllers.updateUser);
userRoutes.delete("/:id", userControllers.deleteUser);

export default userRoutes;