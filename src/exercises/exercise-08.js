/* 
EJERCICIO 8:
Dado un año como parámetro (número), devuelve el número del siglo al que pertenece.
Nota: los siglos comienzan el 1 de enero de un año terminado en 1 y finalizan el 31 de diciembre de un año terminado en 0. 
*/

/**
 * Funcion para obtener el siglo al que pertenece un año
 * @param {*} year 
 * @returns 
 */
export function exercise08(year) {
  // Establecemos el siglo
  const century = Math.ceil(year / 100);
  // Retornamos el siglo
  return `The year ${year} belongs to the ${century}st century`;
}
