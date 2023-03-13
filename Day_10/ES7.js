/* ECMAScript 7 tambien conincidio como ES7 es una version del standard ECMAScript para JS fue lanzado en junio de 2016 y trae algunas caracteristicas nuevas y mejoras al lenguaje algunas de las caracteristicas mas impotantes incluyen :

1. Exponentiation operator (**) ES7 introduce un nuevo operador para elevar un numeroa a una potencia anteriomente esto podria ser logrado con la funcion Math.pow() ejemplo*/

console.log(2**3);
console.log(Math.pow(2,3));

/* Trailing commas ES7 permite la utilizacion de comas al final de una lista de argumentos objetos y arrays Este es un cambio sintactico que ayuda a la legibilidad y manternimioento de codigo EJEMPLO: */

const objeto = {nombre:"Juan", edad: 45};
const array = [1,2,3];

/* string.prototype.padStart() y string.prototype.padEnd(): ES7 introduce dos nuevos métodos para el prototipo de String rellena la cadena actual con una cadena dada (repetida eventualmente) de modo que la cadena resultante alcance una longitud dada. El relleno es aplicado
desde el inicio (izquierda) de la cadena actual si es usado con padStart, y de modo contrario con padEnd. Ejemplo: */

const cadena = "Hola";
console.log(cadena.padStart(7, "**")); // Output: "****Hola"
console.log(cadena.padEnd(7, "*")); // Output: "Hola****"

/* Cada año sale una nueva versión de ES, en esta colección de lecturas solamente te mostramos 2 que tuvieron muchos grandes cambios. Te invitamos a que indagues más en las futuras versiones que salen cada año. */