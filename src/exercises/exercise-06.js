/* 
EJERCICIO 6:
Escribir una función que calcule si una cadena de texto es un palíndromo y
devuelva un mensaje con la cadena de texto y el resultado.

Ejemplos:
"The phrase 'Rats live on no evil star' is palindrome"
"The phrase 'Hello world' is NOT palindrome"

Nota: los signos de puntuación, mayúsculas y espacios deben ser ignorados (no incluyas los acentos). 
*/

/**
 * Funcion que te dice si una cadena de texto es un palíndromo.
 * @param {*} string 
 * @returns 
 */
export function exercise06(string) {
  //Formateamos el texto a minúsculas y eliminamos los espacios
  string = string.toLowerCase()
  while (string.includes(" ")) {
      string = string.replace(" ", "");
  }
  //Eliminamos el carácter central si la longitud del texto es impar
  string = removeCharacterCenter(string);
  //Dividimos la cadena en dos partes de igual longitud.
  let firstHalf = string.slice(0, string.length / 2);
  let secondHalf = string.slice(string.length / 2);
  // Paso 4: Le damos la vuelva a la segunda parte de la cadena.
  secondHalf = secondHalf.split("").reverse().join("");
  return firstHalf === secondHalf
    ? `The phrase '${string}' is a palindrome`
    : `The phrase '${string}' is NOT a palindrome`;
}

/**
* Función que elimina el carácter central de una cadena de texto.
* @param {*} text 
* @returns 
*/
function removeCharacterCenter(text) {
  // Verifica si la longitud del texto es impar
  if (text.length % 2 !== 0) {
      // Calcula el índice del carácter central y lo redondeamos hacia abajo
      const centralIndex = Math.floor(text.length / 2);
      // Elimina el carácter central de la cadena de texto
      text = text.slice(0, centralIndex) + text.slice(centralIndex + 1);
  }
  return text;
}