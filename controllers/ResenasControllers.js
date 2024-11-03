import ResenasService from "../services/ResenasService.js";

class ResenasControllers {
  resenasService = new ResenasService();

  getAllResenas = async (req, res) => {
    try {
      const resenas = await this.resenasService.getAllResenasService();
      res.status(200).send({ success: true, message: resenas });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  getResenasByMovieId = async (req, res) => {
    try {
      const { movieId } = req.params;
      const resenas = await this.resenasService.getResenasByMovieIdService(movieId);
      res.status(200).send({ success: true, message: resenas });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  createResena = async (req, res) => {
    try {
      const { movieId, userId, calificacion, comentario } = req.body;
      const resena = await this.resenasService.createResenaService({
        movieId,
        userId,
        calificacion,
        comentario,
      });
      res.status(200).send({ success: true, message: resena });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  updateResena = async (req, res) => {
    try {
      const { id } = req.params;
      const resenaData = req.body;
      const resena = await this.resenasService.updateResenaService(id, resenaData);
      res.status(200).send({ success: true, message: resena });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  deleteResena = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await this.resenasService.deleteResenaService(id);
      res.status(200).send({ success: true, message: result });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
}

export default ResenasControllers;
