import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import User from "./User.js"; // se importa el modelo User para la relación

class Resena extends Model {}

Resena.init(
  {
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          msg: "El ID de la película debe ser un número entero",
        },
        notEmpty: {
          msg: "El ID de la película no puede estar vacío",
        },
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          msg: "El ID del usuario debe ser un número entero",
        },
        notEmpty: {
          msg: "El ID del usuario no puede estar vacío",
        },
      },
    },
    calificacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: {
          args: [1],
          msg: "La calificación debe ser al menos 1",
        },
        max: {
          args: [10],
          msg: "La calificación no puede ser superior a 10",
        },
        isInt: {
          msg: "La calificación debe ser un número entero",
        },
      },
    },
    comentario: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: {
          args: [0, 500],
          msg: "El comentario no puede tener más de 500 caracteres",
        },
      },
    },
  },
  {
    sequelize: connection,
    modelName: "Resena",
  }
);

// Relación entre User y Resena
User.hasMany(Resena, { foreignKey: "userId" });
Resena.belongsTo(User, { foreignKey: "userId" });

export default Resena;
