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
  getUserByIdService = (id) => {
    return "get user by id service";
  };
  createUserService = async (userData) => {
    try {
      const data = await User.create(userData);
      return data;
    } catch (error) {
      throw error;
    }
  };
  updateUserService = (id) => {
    return "update user service";
  };
  deleteUserService = (id) => {
    return "delete user service";
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