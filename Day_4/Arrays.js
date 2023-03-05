/* Arrays: Son un tipo de objeto que permite almacenar una coleccion de valores, estos valores pueden ser de cualqauier tipo, como numeros, cadenas,objetos, incluso otros arrays, los arrays son utiles para almacenar y manejar datos en una sola estructura

la sintaxis para crear un array en javascript es la siguiente:

*/

let miArray = ["Valor_1","Valor_2",2,10.5];
let colores = ["Rojo","Azul","Verde"];

/* Los arrays tienen un  indice numerico que comienza en O por lo tanto el primer elmento del array tiene el indice O, El segundo tiene el indice 1, y asi sucevivamente, por ejemplo para acceder al primero elemento del array "colores" se utilizaria la sintaxis colores[0]

uno de los metodos mas populares en los arrays de JS ES push(). este metodo permite agregar un nuevo element al final del array ejemplo

*/

colores.push("Amarillo");
console.log(colores);

/* Otro metodo popular es pop() que permite elminar el ultimo elemento al array por ejemplo */

colores.pop();
console.log(colores);

// Metodo map(), permite aplicar una funcion a cada elemento de array y devolver un nuevo array con los valores modificaso por ejemplo:

const numeros = [1,2,3,4,5];
const cuadrados = numeros.map(function(numero){
    return numero * numero;
})
console.log(cuadrados);

/* El metodo reduce() permite combinar todos los elementos del array en un solo valor, por ejemplo: */

const suma = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
  }, 0);
  console.log(suma);


/* existen mas metodos populares en los arrys de js como filter(), sort(), slice(), por los ales no te debes preocupar por ahora mas adelante tendras una seccion completa acerca de estos metodos */