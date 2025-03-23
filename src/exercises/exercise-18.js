/* 
EJERCICIO 18:
Dada una cadena de texto, crea una función que devuelva un objeto donde
las claves (keys) son cada una de las letras de la cadena y el valor el
número de veces que se repite en el string cada una de ellas.
Ejemplo: "Hello world"
{
    h: 1,
    e: 1,
    l: 3,
    o: 2,
    r: 1,
    d: 1,
}

Nota: siempre letras minúsculas y sin tildes (para simplificar)
*/

/**
 * Funcion que recibe una cadena de texto y devuelve un objeto con las letras de la cadena y el número de veces que se repiten.
 * @param {*} string 
 * @returns String formateada en minúsculas y sin tildes y con # delante de la cadena
 */
export function exercise18(string) {
  // Convertir la cadena a minúsculas
  string = string.toLowerCase();
  // Eliminar los espacios en blanco
  while (string.includes(" ")) {
    string = string.replace(" ", "");
  }
  string = removeAccents(string);
  // Eliminar los acentos de la cadena
  string = removeAccents(string);
  // Crear un objeto vacío
  const obj = {};
  // Recorrer la cadena
  for (let i = 0; i < string.length; i++) {
      // Obtener la letra actual
      const letter = string[i];
      // Si la letra no existe en el objeto, inicializarla con 1
      if (!obj[letter]) {
          obj[letter] = 1;
      } else {
          // Si la letra ya existe en el objeto, incrementar su valor
          obj[letter]++;
      }
  }
  // Devolver el objeto
  return obj;
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
