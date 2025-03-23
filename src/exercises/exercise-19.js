/* 
EJERCICIO 19:
Un isograma es una palabra o frase en la que cada letra aparece el mismo número de veces.
Dado una cadena de texto, comprueba si es un isograma o no y devuelve un mensaje.

Ejemplos:
"the string 'Code deco' is an isogram"
"the string 'hello world' is not an isogram"
*/

/**
 * Funcion que recibe una cadena de texto y devuelve un mensaje si es un isograma o no.
 * @param {*} string 
 * @returns String con el resultado de si es un isograma o no
 */
export function exercise19(string) {
      // Convertimos la cadena a minúsculas
      string = string.toLowerCase();
    
      // Declaramos la variable isIsogram y obtenemos el resultado de lettersOcurrences
      const isIsogram = lettersOcurrences(string);
      
      // Retornamos el resultado
      return isIsogram 
          ? `the string '${string}' is an isogram` 
          : `the string '${string}' is not an isogram`;
}


function lettersOcurrences(string) {
  const obj = {};
  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    if (!obj[letter]) {
      obj[letter] = 1;
    } else {
      obj[letter]++;
    }
  }
  return obj;
}
