/* 
EJERCICIO 4:
Muestra el resultado de quitar las vocales a un string que pasamos como parámetro:
Pasándole el string “Hi, I am learning Javascript” la función debe devolver “H,I m lrnng Jvscrpt”
Nota: vowels = "aeiouAEIOU" (no incluyas los acentos)
Atención: cuidado con vocales aisladas y con espacios en blanco dobles
*/
export function exercise04(string) {
  const vowels = "aeiouAEIOU";
  // Eliminamos los espacios en blanco dobles
  while (string.includes(" ")) {
    string = string.replace(" ", "");
  }
  let result = "";
  // Recorremos el string y si el caracter no es una vocal lo añadimos al resultado
  for (let i = 0; i < string.length; i++) {
    if (!vowels.includes(string[i])) {
      result += string[i];
    }
  }

  return result;
}
