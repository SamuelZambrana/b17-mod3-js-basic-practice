import { movies, categories } from '../data.js';                                               
/* 
EJERCICIO 14:
Escribe una función que pasándole "movies" y "categories" del archivo data.js
como parámetros filtra las películas que pertenezcan a la categoria "Drama" 
e incluye solo el título y la descripción.
*/

/**
 * Funcion que obtiene como parametros un array de películas y un objeto con las categorías y devuelve un array de objetos con el título y la descripción de las películas de la categoría "Drama"
 * @param {*} movies 
 * @param {*} categories 
 * @returns Array de objetos con el título y la descripción de las películas de la categoría "Drama"
 */
export function exercise14(movies, categories) {
  // Filtramos las películas que pertenecen a la categoría "Drama"
  return movies.filter(movie => movie.category === categories.drama)
        .map(movie => ({ title: movie.title, description: movie.description }));
}
