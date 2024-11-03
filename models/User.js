import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import bcrypt from "bcrypt";

class User extends Model {
  compare = async (password) => {
    const comparePass = await bcrypt.compare(password, this.pass);
    return comparePass;
  };
}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [2, 50],
          msg: "El nombre debe tener entre 2 y 50 caracteres",
        },
        notEmpty: {
          msg: "El nombre no puede estar vacío",
        },
      },
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Debe ser un correo electrónico válido",
        },
        notEmpty: {
          msg: "El correo no puede estar vacío",
        },
      },
    },
    pass: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8, 100],
          msg: "La contraseña debe tener al menos 8 caracteres",
        },
        notEmpty: {
          msg: "La contraseña no puede estar vacía",
        },
      },
    },
    RoleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2,
      validate: {
        isInt: {
          msg: "El RoleId debe ser un número entero",
        },
      },
    },
    salt: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: connection,
    modelName: "User",
  }
);

User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(10);
  user.salt = salt;
  // console.log(`🚀 ~ User.beforeCreate ~ salt:`, salt);
  const hash = await bcrypt.hash(user.pass, salt);
  // console.log(`🚀 ~ User.beforeCreate ~ hash:`, hash)
  user.pass = hash;
});

export default User;