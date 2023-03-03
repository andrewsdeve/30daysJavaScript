/* HOISTING Y COERCION: Es un comportamiento de javaScript en el que las declaraciones de variables y Funciones son movidas al comienzo del ambito actual
antes de que calqer otro codigo sea ejecutado , esto significa que las declaraciones de las variables y funciones pueden ser utilizadas antes de haber sido declaradas en el codigo  */

// EJEMPLO: 

console.log(x);
var x = 5;

// javascript interpreta este codigo como estuviera escrito de la siguiente manera

var x ;
console.log(x);
x = 5;

// sin embargo es importante tener en cuenta que las asignaciones no son movidas al comiento del ambito, solo llas declaraciones, esto significa que el siguiente codidfo dara un error

/* 
console.log(y);
y = 10;
este codigo genera un error 
*/


/* Por otro lado coercion es el proceso por el cual JS intenta convertir automaticamente un valor de un tipo a otro para que pueda ser comparado o operandos esto puede dar lugar a algunos resultados inesperados si no es se tienen cuenta  */

// EJEMPLO:

console.log( 1 == '1')

// el resultado sera verdadero ya qaue JavaScript intenta convertir el string "1" en e numero 1 antes de compararlo
// Ejemplo:

console.log(true == 1);

/* Aqui el valor  booleano true es convertido en el numero 1 antes de compararlos dando como resultado verdadero  */
