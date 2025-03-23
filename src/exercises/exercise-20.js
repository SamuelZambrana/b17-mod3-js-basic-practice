/* 
EJERCICIO 20:
Los números de Fibonacci es una secuencia de números donde cada número se calcula en base a los dos anteriores:
Fib(n) = (n-2) + (n-1)

Excepto para cuando n > 2:
Fib(0) = 0
Fib(1) = 1

Crea 2 funcines que dado un número entero devuelva el Fibonacci de ese número como parámetro. 
La primera función debe ser recursiva y la segunda iterativa.

Ejemplo: Fibonacci(20) = 6765

Nota: evita llamar a la función con números altos en la versión recursiva.
*/

/**
 * Funcion recursiva que devuelve el numero de Fibonacci de n.
 * @param {*} n 
 * @returns Numero de Fibonacci de n
 */
export function exercise20(n) {
  // Condiciones base
  if (n === 0) return 0;
  if (n === 1) return 1;
  // Llamadas recursivas
  return exercise20(n - 1) + exercise20(n - 2);
}

/**
 * Funcion recursiva que devuelve el numero de Fibonacci de n.
 * @param {*} n 
 * @returns Numero de Fibonacci de n
 */
export function exercise20Iterative(n) {
  if (n === 0) return 0; // Caso base para Fib(0)
  if (n === 1) return 1; // Caso base para Fib(1)

  let prev = 0; // Inicializamos Fib(0)
  let curr = 1; // Inicializamos Fib(1)

  // Iteramos desde 2 hasta n
  for (let i = 2; i <= n; i++) {
      const temp = curr; // Guardamos el valor actual
      curr = curr + prev; // Calculamos el siguiente número de Fibonacci
      prev = temp; // Actualizamos el valor previo
  }

  return curr; // Retornamos el Fibonacci de n
}
