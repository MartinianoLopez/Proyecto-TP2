import { User, Role } from "../models/index.js";

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
      const user = await User.findByPk(id, { include: Role });
      if (!user) throw new Error("Usuario no encontrado");
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
      // console.log(`🚀 ~ UserService ~ loginUserService= ~ data:`, data);
      if (!data) throw new Error("User not found");

      const comparePass = await data.compare(pass);
      // console.log(`🚀 ~ UserService ~ loginUserService= ~ comparePass:`, comparePass)
      if (!comparePass) throw new Error("User not found");

      return comparePass;
    } catch (error) {
      throw error;
    }
  };
}

export default UserService;