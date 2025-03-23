/* 
EJERCICIO 17:
Dada una cadena de texto, crea una función que la recibe como argumento y 
devuelve dicha cadena transformada en hashtag, es decir, la cadena comenzando 
por almohadilla (#) y las palabras sin espacios comenzando la primera letra en mayúscula
Ejemplo: "This is a hashtag" se transforma en "#ThisIsAHashtag"
*/
export function exercise17(string) {
  // Formatear la cadena utilizando replaceHyphenAndCapitalize
  const formattedKey = replaceHyphenAndCapitalize(string);
  // Agregar '#' delante de la cadena formateada
  return `#${formattedKey}`;
}

/**
 * Function that replaces the hyphens of a key with underscores and capitalizes the next character.
 * @param {} string - The key with hyphens.
 * @returns {} - The key with the hyphens replaced by underscores.
 */
function replaceHyphenAndCapitalize(string) {
  let newString = '';
  let nextUppercase = false;
  
  for (let i = 0; i < string.length; i++) {
      if (string[i] === ' ') {
          nextUppercase = true;
      } else {
          newString += nextUppercase ? string[i].toUpperCase() : string[i];
          nextUppercase = false;
      }
  }
  return newString;
}
