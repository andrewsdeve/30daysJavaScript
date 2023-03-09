/* Programacion funcional:  la programacion funcional es un enfoque de programacion wque se centra en el uso de funciones y evita el uso de estado y efectos secunarios, en javascript la progamacion funcioanl sed basa en el uso de funciones puras es decir funciones que no tienen efectos secundarios y siempre devuelve  mismo resultado dado el mismo input 
una des las careacteristicas principals de la programacion funcional es el usoa de first-class functions (funciones como primer ciudadano) es decir se considera como valores y puede ser asignados a variables, pasados como argumentos a otras funciones retronadas como resultados de otras funciones esto permite crearfunciones mas pequeñas y reutilizables que se pueden combinar para crear funciones mas complejas 

por ejemplo: podemos crear una funcion "add" que toma dos numeros como argumentos y devuelve una suma



*/

function add (a,b){
    return a + b;
}

/* luego podemos asignar esta funcion a una variable y pasarla como argumento a otra funcion como makeOperation */

const operation = add;
function makeOperation (operation, num1 , num2){
    return operation(num1,num2);
}
console.log(makeOperation(operation, 2,3));

/* de esta manera la funcion makOperation se vuelve mas generica y reutilizable ya que eude recibir cualquier funcion que tenga la misma estructura de argumentos
otra caracteristica importante de la programcion funcional es el uso de funciones puras esto significa que las funciones no tienen efectos secundiarios y siempre devuelven el mismo resultado dadoel mismo input esto hace que el codido sea mas facil de probar y depurar yque no hay efectos secundarios ocultos que puedan afect el comportamiento del codigo 

por ejemplo la funcion map() es una funcion pura ya queoma un array de nuymeros como input y devuelve un nuevo array con numeros ransformados sin modificar el array original*/

const numbers = [1, 2, 3, 4, 5];
const doubles = numbers.map(function(number) {
  return number * 2;
});
console.log(doubles); // [2, 4, 6, 8, 10]

/* en resumen la programacion funcionas es un enfoque de programcion que se centra en el uso de funciones y evita el uso de estado y efedctos secundairios, en javascript se puede utilizar la programcion funcional mediante el uso de funciones como map, reduce,filter arrow functions y librerias de programacion funcional pura lo cual permite creare comdigo mas facil de probar y depurar */


