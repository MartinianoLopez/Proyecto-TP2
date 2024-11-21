
export const validateAdmin = async (req, res, next) => {
    try {
        const user = req.user;
        const { RoleId } = req.user;
        if (!RoleId) {
            return res.status(401).send({ success: false, message: "Role not found" });
          }
        if (RoleId !== 1) {
            return res.status(403).send({ success: false, message: "Usuario no autorizado" });
          }
          next();
    } catch (error) {
        next(error); 
    }
};

export default validateAdmin;