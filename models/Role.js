import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Role extends Model {}

Role.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "user",
      validate: {
        isIn: {
          args: [["user", "admin"]],
          msg: "El rol debe ser 'user' o 'admin'",
        },
        notEmpty: {
          msg: "El rol no puede estar vacío", 
        },
      },
    },
  },
  {
    sequelize: connection,
    modelName: "Role",
  }
);

export default Role;