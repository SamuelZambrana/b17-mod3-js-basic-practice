/* 
EJERCICIO 7:
Un reloj muestra: 
 - la hora (0 <= h <= 23) 
 - los minutos (0 <= m <= 59)
 - y los segundos (0 <= s <= 59).

 Escribe una funcion que calcule los millisegundos que han pasado desde 
 media noche 00:00:00 hasta la hora actual teniendo en cuenta que:

 - hay 1000 millisegundos en un segundo.
 - podemos obtener la hora, minutos y segundos con la función "getTime" .
*/

/**
 * Función que calcula los milisegundos que han pasado desde media noche.
 * @param {*} date 
 * @returns 
 */
export function exercise07(date) {
  // Obtenemos la fecha actual.
  const now = new Date();
  // Obtenemos la hora, minutos y segundos de la fecha.
  const time = getTime(date);
  const ms = time.hours * 3600000 + time.minutes * 60000 + time.seconds * 100
  time.hours === 0 && time.minutes === 0 && time.seconds === 0 ? ms : ms + 1000
  // Escribe tu solución aquí
  return `Milliseconds from midnight: ${ms}`;
}

function getTime(date) {
  return {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };
}
