import { Pelicula } from "../models/index.js";

async function peliculaSeed() {
    try {
      const apiKey = '770b65ea03b332a2a56aacdf1c4fa4d7'; // tu clave de API
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
      
      if (!response.ok) throw new Error('Error al obtener los datos');
  
      const datosExternos = await response.json();
      
      if (Array.isArray(datosExternos.results) && datosExternos.results.length > 0) {
        const generosPermitidos = ["Accion", "Comedia", "Drama", "Terror", "Ciencia Ficción", "Documental"];
        
        const datosLimitados = datosExternos.results.slice(0, 20).map(pelicula => ({
          titulo: pelicula.title,
          descripcion: pelicula.overview,
          fechaLanzamiento: pelicula.release_date,
          genero: generosPermitidos.includes(pelicula.genre_ids[0]) ? pelicula.genre_ids[0] : "Documental" // Asigna un género permitido o un valor por defecto
        }));
        
        await Pelicula.bulkCreate(datosLimitados);
        console.log("Datos copiados exitosamente.");
      } else {
        console.error("Los datos obtenidos no son válidos o están vacíos.");
      }
    } catch (error) {
      console.error("Error copiando datos:", error);
    }
}

export default peliculaSeed;