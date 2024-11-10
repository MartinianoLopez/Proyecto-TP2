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
  updateUser = (req, res) => {
    const user = this.userService.updateUserService();
    res.status(200).send(user);
  };
  deleteUser = (req, res) => {
    const user = this.userService.deleteUserService();
    res.status(200).send(user);
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
      const user = await this.userService.me(token);
      res.status(200).send({ success: true, message: user});
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };



}

export default UserControllers;