import { Resenas, User } from "../models/index.js";

class ResenasService {
  getAllResenasService = async () => {
    try {
      const data = await Resenas.findAll({
        include: [{ model: User, attributes: ["name", "mail"] }],
      });
      return data;
    } catch (error) {
      throw error;
    }
  };

  getResenasByMovieIdService = async (movieId) => {
    try {
      const data = await Resenas.findAll({ where: { movieId } });
      return data;
    } catch (error) {
      throw error;
    }
  };

  createResenaService = async (resenaData) => {
    try {
      const data = await Resenas.create(resenaData);
      return data;
    } catch (error) {
      throw error;
    }
  };

  updateResenaService = async (id, resenaData) => {
    try {
      const resena = await Resenas.findByPk(id);
      if (!resena) throw new Error("Reseña no encontrada");
      await resena.update(resenaData);
      return resena;
    } catch (error) {
      throw error;
    }
  };

  deleteResenaService = async (id) => {
    try {
      const resena = await Resenas.findByPk(id);
      if (!resena) throw new Error("Reseña no encontrada");
      await resena.destroy();
      return { message: "Reseña eliminada correctamente" };
    } catch (error) {
      throw error;
    }
  };
}

export default ResenasService;
