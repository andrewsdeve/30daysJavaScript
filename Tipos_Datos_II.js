// el valor NULL es un tipo de dato que repesenta un valor vacio o nulo en javascript podemos utilizar la palabra clave null para representar el valor nulo
// para representar un valor nulo a menudo utilizamos null para representar un valor que aun no ha sido inicializado o para representar un valor que no tiene sentido 
// en el contexto actual

// EJEMPLO:

const nombre = null;
console.log(nombre);

// UNDEFINED
// Tipo de dato que represntaun valor que aun no ha sido asignado o que no tine un valor valido
//EJEMPLO: 

let nombres;
console.log(nombres);

// Diferencia entre Null y Undefined: son valores diferentes en JS null representa un valor intencionalmente vacio 
// undefined representa un valor que no ha si asignado o no tiene un valor valido

// ejemplo: podriamos representar un gatito que aun no tiene dueño por medio de un objeto

let gatito = {
    nombre: "Michi",
    edad: 3,
    dueño: null
}
console.log(gatito);

// por otro lado podemos utilizar undefined para representar que un gato no ha sido adoptado

let gatos;
console.log(gatos);

// SYMBOL:Son tipos de dfatos unicos en JS que seutilizan para crear udentificadores unicos cada vez que se crea un simbolo se geenra un nuevo identificador
// lo que hace ideal para usar como claves de objetos o para identificar elementos de manera unica en una aplicacion

// EJEMPLO: 

const simbolo = Symbol();

let perritos = {
    nombre: "Firulais",
    edad: 3,
    [simbolo]: "Identificador Unico"
};

console.log(perritos[simbolo]);

// es importante tener en cuenta que los simbolos son identificadores unicos lo que significa, que dos simbolos creados de manera independiente nuca seran iguales
// incluso si tieen la misma descripcion esto hace que los simbolos sean ideales para usar como identificadores unicos en futuras aplicaciones

// BIGINT:  Es un nuevo tipo de dato en JS que se usa para representar numeros enteros de un tamaño mayor  al que puede manerar JS de manera nativa los bigint se escriben con el sufijo n por ejemplo 12345678912345678901234567890n

// EJEMPLO:

const numeroGrande = 123456789012345678901234567890n;
console.log(numeroGrande + 1n);
console.log(numeroGrande *2n);
console.log(numeroGrande / 3n);

// solo bigint se utiliza para operaciones matematicas y no puede ser usado con operadores de comparacion cmo == o === en su lugar debes utilizar
// BigInt.asIntN  y BigInt.asUintN para hacer comparaciones entre bigint y numeros normales
// no son compatibvles con todas las funciones y metodos de JS que aceptan numeros, por lo que se debe asegurar de verificar la documentacion de la funcion o metodo
// que quieres usar antes de intentar usar bigint 

