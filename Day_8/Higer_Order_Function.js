/* Los Higher-Order Function sn una caracteristica fundamentar de la programacion funcional de JS como lo vimos en clases anteores estas funciones puras que pueden tomar otras funciones como argumento y o dedvolver funciones como resultados esto permite crear funciones mas genericoas y reutilizables qaue pueden ser comiandas de diferentes maneras para crear funciones mas complejas

Una de las caractristicas principales de los Higher-Order Functions es su capacidad para manipular otras funciones de manera generica por ejemplo una funcion  map es una higher-order Functions es su capacidad para manipular otras funciones de manera generica por ejemplo una funcion map es una higher-order function que toma una funcion y un arrany como argumetos y devuelve un nuev array con los resultadod de aplicar la funion a cada elemento del array ejemplo:

*/

const numbers = [1,2,3,4,5,6];
const doubleNumbers = numbers.map(function(number){
    return number * 2;
});

console.log(doubleNumbers);
console.log(numbers);

/* Otra caracteristica importante de las Higher-Order Functions es su capacidad para crear funciones mas peque;as y reutilizablespor ejemplo una funcion filter es una higher-order function que tma una funcion como array como argumento y devuelve un nbuevo array con los elementos que cumlen con determinada condicion */

const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13];

const evenNumeros = numeros.filter(function(numeros){
    return numeros % 2 === 0;
});

console.log(evenNumeros);