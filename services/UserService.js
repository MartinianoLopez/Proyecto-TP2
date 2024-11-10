import { User, Role } from "../models/index.js";
import { genToken, verifyToken } from "../utils/token.js";


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

  loginUserService = async (user) => {
    try {
      const { pass, mail } = user;
      const data = await User.findOne({ where: { mail } });
      if (!data) throw new Error("User not found");

      const comparePass = await data.compare(pass);
      if (!comparePass) throw new Error("User not found");

      const payload = {
        id: data.id,
        mail: data.mail,
      };

      const token = genToken(payload);

      return token;
    } catch (error) {
      throw error;
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