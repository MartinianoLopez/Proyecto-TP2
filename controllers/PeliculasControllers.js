import PeliculasService from "../services/PeliculasService.js";

class PeliculasControllers {
  peliculasService = new PeliculasService();

  getAllPeliculas = async (req, res) => {
    try {
      const peliculas = await this.peliculasService.getAllPeliculasService();
      res.status(200).send({ success: true, message: peliculas });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  getPeliculaById = async (req, res) => {
    try {
      const { id } = req.params;
      const pelicula = await this.peliculasService.getPeliculaByIdService(id);
      res.status(200).send({ success: true, message: pelicula });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  createPelicula = async (req, res) => {
    try {
      const peliculaData = req.body;
      const pelicula = await this.peliculasService.createPeliculaService(peliculaData);
      res.status(201).send({ success: true, message: pelicula });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  updatePelicula = async (req, res) => {
    try {
      const { id } = req.params;
      const peliculaData = req.body;
      const pelicula = await this.peliculasService.updatePeliculaService(id, peliculaData);
      res.status(200).send({ success: true, message: pelicula });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  deletePelicula = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await this.peliculasService.deletePeliculaService(id);
      res.status(200).send({ success: true, message: result });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
}

export default PeliculasControllers;
