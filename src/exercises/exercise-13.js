import { movies } from '../data.js';
import { exercise11 } from './exercise-11.js';

/* 
EJERCICIO 13:
Escribe una función que, pasándole como parámetro el array de películas 'movies'
exportado en el archivo "data.js", devuelva un array con el título y la descripción 
de las mejores peliculas ordenadas de mejor a peor, siendo las mejores aquellas cuya 
valoración es superior a la valoración media de todas las películas
*/
export function exercise13(movies) {
  // Obtenemos la valoración media de todas las películas
  const averageRating = movies.reduce((count, movie) => count + movie.rating, 0) / movies.length;
  // Obtenemos las películas cuya valoración es superior a la media
  const bestMovies = movies.filter(movie => movie.rating > averageRating);
  // Ordenamos las películas por valoración
  return exercise11(bestMovies);
}


