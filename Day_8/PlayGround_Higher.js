/* En este desafío debes desarrollar una implementación personalizada del método map utilizando funciones de orden superior.

Recibirás como parámetros un array y una función (func). El array contendrá un conjunto de elementos (números, objetos, strings, etc.) y la función se utilizará para aplicar una acción sobre cada elemento del array. Tu objetivo es devolver un nuevo array con los resultados de la función tal y como lo haría el método map. */

const miArray = [1,2,4,5,6,7,8,9];

const doubleMiArray = miArray.map(function(numero){
    return numero * 2;
})

console.log(doubleMiArray);