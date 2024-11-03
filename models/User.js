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
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      isEmail: true,
    },
    pass: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    RoleId: {
      type: DataTypes.INTEGER,
      defaultValue: 2,
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