import { Pelicula } from "../models/index.js";
import { API_KEY } from "../config/config.js";

async function peliculaSeed() {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
    
    if (!response.ok) throw new Error("Error al obtener los datos de la API.");
    
    const datosExternos = await response.json();
    
    if (Array.isArray(datosExternos.results) && datosExternos.results.length > 0) {
      const generoMap = {
        28: "Accion",
        35: "Comedia",
        18: "Drama",
        27: "Terror",
        878: "Ciencia Ficción",
        99: "Documental",
      };

      const datosLimitados = datosExternos.results.slice(0, 20).map((pelicula) => ({
        titulo: pelicula.title,
        descripcion: pelicula.overview || "Descripción no disponible",
        fechaLanzamiento: pelicula.release_date || "1900-01-01",
        genero: generoMap[pelicula.genre_ids[0]] || "Documental", 
      }));
      
      await Pelicula.bulkCreate(datosLimitados);
      console.log("- Películas copiadas de la API exitosamente:");

      console.table(datosLimitados.map(({ titulo, fechaLanzamiento, genero }) => ({ 
        Título: titulo, 
        "Fecha de Lanzamiento": fechaLanzamiento, 
        Género: genero 
      })));

    } else {
      console.error("Los datos obtenidos no son válidos o están vacíos.");
    }
  } catch (error) {
    console.error("Error copiando datos:", error);
  }
}

export default peliculaSeed;