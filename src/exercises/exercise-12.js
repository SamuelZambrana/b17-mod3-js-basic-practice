import { movies } from '../data.js';

/* 
EJERCICIO 11:
Escribe una función que pasándole como parámetro el array de películas 'movies'
exportado en el archivo "data.js" devuelve un array con el título de las 
películas ordenadas alfabéticamente por el título.

Consejo: 
puedes definir en utils.js una función auxiliar para ordenar las cadenas
que recibe como parámetro dos cadenas y devuelve -1 si la primera es menor que la segunda, 
0 si son iguales y 1 si la primera es mayor que la segunda.
*/

/**
 * Funcion que obtiene como parametros un array de películas y lo devuelve por título de mayor a menor
 * @param {Array} movies 
 * @returns Array de películas ordenadas alfabéticamente por el título
 */
export function exercise12(movies) {
  return movies.map(movie => movie.title).sort(sortStrings);
}

/**
 * Funcion que ordena alfabéticamente dos strings
 * @param {*String} a 
 * @param {*String} b 
 * @returns Number -1 si a < b, 0 si a === b, 1 si a > b
 */
function sortStrings(a, b) {
  const string1 = a.toLowerCase();
  const string2 = b.toLowerCase();

  if (string1 < string2) return -1;
  if (string1 > string2) return 1;
  return 0;
}
