import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Pelicula extends Model {}

Pelicula.init(
  {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [2, 100],
          msg: "El título debe tener entre 2 y 100 caracteres",
        },
        notEmpty: {
          msg: "El título no puede estar vacío",
        },
      },
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: {
          args: [0, 1000],
          msg: "La descripción no puede exceder los 1000 caracteres",
        },
      },
    },
    fechaLanzamiento: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: {
          msg: "La fecha de lanzamiento debe ser una fecha válida",
        },
        notEmpty: {
          msg: "La fecha de lanzamiento no puede estar vacía",
        },
      },
    },
    genero: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [["Accion", "Comedia", "Drama", "Terror", "Ciencia Ficción", "Documental"]],
          msg: "El género debe ser uno de los valores permitidos",
        },
        notEmpty: {
          msg: "El género no puede estar vacío",
        },
      },
    },
  },
  {
    sequelize: connection,
    modelName: "Pelicula",
  }
);

export default Pelicula;