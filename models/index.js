import Role from "./Role.js";
import User from "./User.js";
import Resenas from "./Resenas.js";
import Pelicula from "./Pelicula.js";


Role.hasMany(User, { foreignKey: "RoleId" });
User.belongsTo(Role, { foreignKey: "RoleId" });

// Un usuario tiene muchas reseñas, y una reseña pertenece a un usuario
User.hasMany(Resenas, { foreignKey: "userId" });
Resenas.belongsTo(User, { foreignKey: "userId" });

// Relación entre Pelicula y Resenas
Pelicula.hasMany(Resenas, { foreignKey: "movieId" });
Resenas.belongsTo(Pelicula, { foreignKey: "movieId" });

export { Role, User, Resenas, Pelicula };