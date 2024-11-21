import UserService from "../services/UserService.js";

class UserControllers {
  userService = new UserService();

  getAllUsers = async (req, res) => {
    try {
      const users = await this.userService.getAllUsersService();
      res.status(200).send({ success: true, message: users });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
  getUserById = async (req, res) => {
    try {
        const user = await this.userService.getUserByIdService(req.params.id);
        res.status(200).send({ success: true, user });
    } catch (error) {
        res.status(400).send({
            success: false,
            message: error.message,
        });
    }
};
  createUser = async (req, res) => {
    try {
      const { name, pass, mail, RoleId } = req.body;
      const user = await this.userService.createUserService({
        name,
        pass,
        mail,
        RoleId,
      });
      res.status(200).send({ success: true, message: user });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
  updateUser = async (req, res) => {
    try {
      const { id } = req.params; 
      const userData = req.body; 
  
      const user = await this.userService.updateUserService(id, userData); 
      res.status(200).send({
        success: true,
        message: "User updated successfully",
        data: user,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message || "Failed to update user",
      });
    }
  };
  
  deleteUser = async (req, res) => {
    try {
      const user = await this.userService.deleteUserService(req.params.id); 
      res.status(200).send({
        success: true,
        message: "User deleted successfully",
        data: user,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message || "Failed to delete user",
      });
    }
  };
  login = async (req, res) => {
    try {
      const { pass, mail } = req.body;
      const user = await this.userService.loginUserService({
        pass,
        mail,
      });
      res.cookie("token",user)
      res.status(200).send({ success: true, message: "Usuario loguado con exito" });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  getMe = async (req, res) => {
    try {
      
      const { token } = req.cookies;
      
      if (!token) {
        return res.status(401).send({
          success: false,
          message: "Token not found in cookies",
        });
      }
      const user = await this.userService.me(token);
      res.status(200).send({
        success: true,
        message: "User data retrieved successfully",
        data: user, 
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message || "Failed to retrieve user data",
      });
    }
  };



}

export default UserControllers;