/* 
EJERCICIO 15:
Agrupa en un array las peliculas por categorias:
[
    {
        Drama: {
            {
                title: "Fight Club",
                director: "David Fincher",
                actors: "Brad Pitt, Edward Norton, Helena Bonham Carter",
                year: 1999,
                description:
                "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
                category: "Drama",
                rating: 8.8,
            },
            Action: {
                ...
            },
            ...
        }
    }
]

Pista: usa el método "groupBy" de la clase Object
*/

/**
 * Funcion que obtiene como parametro un array de películas y devuelve un array de objetos con las películas agrupadas por categoría
 * @param {*} movies 
 * @returns Array de objetos con las películas agrupadas por categoría
 */
export function exercise15(movies) {
    const groupedMovies = Object.groupBy(movies, movie => movie.category);
    return groupedMovies;
}
