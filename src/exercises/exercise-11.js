import { movies } from '../data.js';

/* 
EJERCICIO 11:
Escribe una función que, pasándole como parámetro el array de películas 'movies'
exportado en el archivo "data.js", devuelva un array con las peliculas ordenadas 
por valoracion (propiedad "rating") de mayor a menor  
*/

/**
 * Funcion que obtiene como parametros un array de películas y lo devuelve por valoración de mayor a menor
 * @param {*} movies 
 * @returns Array de películas ordenadas por valoración de mayor a menor
 */
export function exercise11(movies) {
  // Ordenamos las películas por valor
  return movies.sort((a, b) => b.rating - a.rating);
}
