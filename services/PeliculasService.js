import Pelicula from "../models/Pelicula.js";

class PeliculasService {
  getAllPeliculasService = async () => {
    try {
      const data = await Pelicula.findAll();
      return data;
    } catch (error) {
      throw error;
    }
  };

  getPeliculaByIdService = async (id) => {
    try {
      const data = await Pelicula.findByPk(id);
      if (!data) throw new Error("Película no encontrada");
      return data;
    } catch (error) {
      throw error;
    }
  };

  createPeliculaService = async (peliculaData) => {
    try {
      const data = await Pelicula.create(peliculaData);
      return data;
    } catch (error) {
      throw error;
    }
  };

  updatePeliculaService = async (id, peliculaData) => {
    try {
      const pelicula = await Pelicula.findByPk(id);
      if (!pelicula) throw new Error("Película no encontrada");
      await pelicula.update(peliculaData);
      return pelicula;
    } catch (error) {
      throw error;
    }
  };

  deletePeliculaService = async (id) => {
    try {
      const pelicula = await Pelicula.findByPk(id);
      if (!pelicula) throw new Error("Película no encontrada");
      await pelicula.destroy();
      return { message: "Película eliminada correctamente" };
    } catch (error) {
      throw error;
    }
  };
}

export default PeliculasService;

