/* 
EJERCICIO 9:
Genera un array de un determinado tamaño con números aleatorios entre dos valores
y calcula el menor y el mayor de estos números.

Ejemplo: 
  exercise09(5, 0, 100) 
  devuelve "The minimum number is 0 and the maximum number is 100 in [0,50,99,49,100]"
*/
export function exercise09(length, start, end) {
  // Generamos un array de longitud length con números aleatorios entre start y end
  const arrayOfRandomNumbers = Array.from({ length }, () => Math.floor(Math.random() * (end - start + 1)) + start);
  // Calculamos el número mínimo
  const min = Math.min(...arrayOfRandomNumbers);
  // Calculamos el número máximo
  const max = Math.max(...arrayOfRandomNumbers);
  // Retornamos el resultado
  return `The minimum number is ${min} and the maximum number is ${max} in ${arrayOfRandomNumbers}`;
}
