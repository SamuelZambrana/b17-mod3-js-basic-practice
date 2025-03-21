/* 
EJERCICIO 10:
Escribe una o varias funciones para que, dado un string, devuelva un array que contenga la posición 
que ocupa cada carácter en el abecedario. Para que sea más sencillo, elimina los espacios y tildes 
(recuerda que puedes utilizar funciones auxiliares de ejercicios anteriores si las declaraste en el archivo utils.js).
*/
export function exercise10(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  //
  string = string.toLowerCase();
  // Eliminamos los espacios
  while (string.includes(" ")) {
    string = string.replace(" ", "");
  }
  // Eliminamos las tildes
  string = removeAccents(string);
  // Creamos un array con las posiciones de cada carácter en el abecedario
  const positions = string.split("").map(character => alphabet.indexOf(character) + 1);
  return positions;
}

/**
 * Función que elimina las tildes de una cadena de texto.
 * @param {*} text 
 * @returns 
 */
function removeAccents(text) {
  const mapAccents = {
      "á": "a",
      "é": "e",
      "í": "i",
      "ó": "o",
      "ú": "u"
  };
  let textWithoutAccents = "";
  for (let i = 0; i < text.length; i++) {
      const character = text[i];
      textWithoutAccents += mapAccents[character] || character;
  }
  return textWithoutAccents;
}
