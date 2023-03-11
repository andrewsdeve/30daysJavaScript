/* LOS CLUSERES:

En JS son una caracteristica fundamentar del lenguaje que permite a las funciones recordar el estado de su entorno de ejecucion, incluso despues de que la funcion haya sido invocada esto permite a las nciones mantener un estado privado y protegido de variables y funciones internas lo que proporciona una mayor flexibilidad y seguridad en el codigo.

un closure se crea cuando una funcion es delcarada dentro de otra funcion, la funcion interna tiene acceso al ambigo de la funcion externa lo que significa que puede acceder a las variles y funcioned declaradas dentro de la funcion extgarna, ademas un  closure tambien tiene acceso a las variables y funciones globales 

observa el sighuiente ejemplo de la funcion counter la funcion externa crea una variable privada llamada count y una funcion interna increment que incrementa el valor de count y devuelve el valor actual

*/

function counter (){
    let count = 0;
    return  function increment(){
        count ++
        return count;
    }
}
const myCounter = counter();
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());

/* En este ejemplo, la función “counter” es el closure y tiene acceso a la variable privada “count” y la función interna “increment”. Al asignar la función “contador” a la variable “myCounter” y luego llamar a la función “myCounter”, se está utilizando el closure para acceder a la variable “count” y modificar su valor cada vez que se llama a la función “increment”. Esto permite mantener un estado interno privado en la función “contador” y evitar conflictos con otras variables con el mismo nombre en el ámbito global. */

/* Ademas de mantener el estgado privado de los closures tambien son utiles para crear funciones geneicas y reutilzbles ya que pueden ser parametrizadas con variables funciones declaradas en su entorno de ejecucion por ejemplo una funcion que toma una funcion y un alor coo argumentos devuelve una nueva funcion aquaplica el valor a la funcion original */

// EJEMPLO:

function mutipliBy(multiplier){
    return function(value){
        return value * multiplier
    }
}

const double = mutipliBy(5);
console.log(double(5));
console.log(double(10));

/* En este ejemplo la funcion multipliBy es un closure que toma un factor como argumento y devuelve una funcion que multiplica el valo dado por el factor al asignar la funcion multipl,icador con un fator especicifico a la variable doble se esta utilizando closure para prametrizar la funcion con un valor escifico y crear una nueva funcion rutilizable que siempre multiplica el valor por2 por 3 o cualquierotro numero  */
