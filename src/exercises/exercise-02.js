/* 
EJERCICIO 2:
Muestra el siguiente mensaje dependiendo de si un número es par o impar:
“Number 34 is even” ó “Number 13 is odd”
Nota: even = par | odd = impar
*/

/**
 * Función que muestra si un número es par o impar.
 * @param {number} number - Número a evaluar.
 * @returns {string} - Mensaje con el resultado.
 */
export function exercise02(number) {
  let result = ""
  number % 2 === 0 ? (result = "even") : (result = "odd");
  return `Number ${number} is ${result}`;
}
