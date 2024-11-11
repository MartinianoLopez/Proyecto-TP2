import { Resenas, Pelicula } from "../models/index.js";

async function reseñaSeed() {
    try {
        const peliculas = await Pelicula.findAll({ attributes: ['id'] }); 
        const reseñas = [];

        peliculas.forEach(pelicula => {
            const numeroDeReseñas = Math.floor(Math.random() * 5) + 1;

            for (let i = 0; i < numeroDeReseñas; i++) {
                reseñas.push({
                    movieId: pelicula.id,
                    userId: i + 1,
                    calificacion: Math.floor(Math.random() * 10) + 1, 
                    comentario: "Comentario de ejemplo para la reseña de la película" 
                });
            }
        });

        await Resenas.bulkCreate(reseñas);
        console.log("Reseñas generadas exitosamente.");
    } catch (error) {
        console.error("Error copiando reseñas:", error);
    }
}

export default reseñaSeed;