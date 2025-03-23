/* 
EJERCICIO 16:
Escribe una función que devuelva un array que solo incluya el titulo de la pelicula mejor valorada de cada uno de estos actores: 
- Leonardo Dicaprio
- Robert De Niro
- Tom Hanks

Nota: asegurate que no hay titulos duplicados
*/

/**
 * Funcion que obtiene como parametro un array de películas y devuelve un array de strings con los títulos de las mejores películas de los actores
 * @param {*} movies 
 * @returns Array de strings con los títulos de las mejores películas de los actores
 */
export function exercise16(movies) {
  const actors = ["Leonardo DiCaprio", "Robert De Niro", "Tom Hanks"];
  // Obtenemos los actores cuyas películas están en el array de actores
  const bestMovies = actors.map(actor => {
    // Obtenemos las películas del actor en el objeto movies
    const actorMovies = movies.filter(movie => movie.actors.includes(actor));

    // Verificamos si hay películas para el actor
    if (actorMovies.length === 0) {
      return `No movies found for actor: ${actor}`;
    }

    // Obtenemos la mejor película del actor
    const bestMovie = actorMovies.reduce((best, movie) =>
      best.rating > movie.rating ? best : movie
    );

    return bestMovie.title; // Devolvemos el título de la mejor película
  });

  return bestMovies; // Devolvemos el array de las mejores películas
}

