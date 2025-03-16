/* 
EJERCICIO 5:
Escribe una función que recibe de entrada una cadena de texto y 
devuelve otra cadena con cada letra repetida tantas veces como la posición que ocupa 
empezando la primera repetición en mayúscula y el resto en minúscula

Ejemplos:
  exercise05('code') // result: "COoDddEeee"
  exercise05('list') // result: "LIiSssTttt"
  exercise05('function') // result: "FUuNnnCcccTttttIiiiiiOooooooNnnnnnnn"
*/
export function exercise05(string) {
  
  let result = "";
  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    const letterRepeated = letter.toUpperCase() + letter.toLowerCase().repeat(i);
    result += letterRepeated;
  }
  return result;
}
