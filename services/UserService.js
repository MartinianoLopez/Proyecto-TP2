import { User, Role } from "../models/index.js";
import { genToken, verifyToken } from "../utils/token.js";
import bcrypt from "bcrypt";
import { JWT_SECRET } from "../config/config.js";

class UserService {
  getAllUsersService = async () => {
    try {
      const data = await User.findAll({
        attributes: ["name"],
        include: Role,
      });
      return data;
    } catch (error) {
      throw error;
    }
  };

   getUserByIdService = async (id) => {
    try {
      const user = await User.findByPk(id);
      if(!user) throw new Error("Usuario no encontrado");
      return user;
    } catch (error) {
      throw error;
    }
  };

  createUserService = async (userData) => {
    try {
      const data = await User.create(userData);
      return data;
    } catch (error) {
      throw error;
    }
  };
  
  updateUserService = async (id, userData) => {
    try {
      const user = await User.findByPk(id);
      if (!user) throw new Error("Usuario no encontrado");
      await user.update(userData);
      return user;
    } catch (error) {
      throw error;
    }
  };

  deleteUserService = async (id) => {
    try {
      const user = await User.findByPk(id);
      if (!user) throw new Error("Usuario no encontrado");
      await user.destroy();
      return { message: "Usuario eliminado correctamente" };
    } catch (error) {
      throw error;
    }
  };

  loginUserService = async ({ pass, mail }) => {
    try {
      const user = await User.findOne({ where: { mail } });
      if (!user || !user.pass) throw new Error("Invalid credentials");
  
      const isValidPass = await bcrypt.compare(pass, user.pass);
      if (!isValidPass) throw new Error("Invalid credentials");
  
      return genToken({ id: user.id, mail: user.mail, RoleId: user.RoleId });
    } catch (error) {
      console.error("Error en loginUserService:", error.message);
      throw new Error("Authentication failed");
    }
  };

  me = async (token) => {
    try {
      const verify = verifyToken(token);
      return verify.data;
    } catch (error) {
      throw error;
    }
  };
}

export default UserService;