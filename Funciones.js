// Las funciones son una de las carateciticas mas importantes y poderosas de javaScript
// Una funcion es un bloque de codigo que se puede reutilizar en diferentes  parters de un programa
// Las funones se utilizar para realizar una tarea especifica y pueden recibir uno o mas argumentos tambien conmocidos como parametros dependiendo de la situcion


// Declarar una funcion en javascript

function miFuncion (parametro_1, parametro_2){
    // Codigo de la funcion
}

// para llamar una funcion simplemente se escribe su nombre seguido de parentesis

//miFuncion(valor1, valor2);

// las funciones tambien pueden devolver un valor como resultado la palabra clave RETURN , el valor devuelto se puede asignar a una variable o utilizar en un expresion
// Ejemplo 1 

function suma(a,b){
    return a + b;
}

let resultado = suma(2,3);
console.log(resultado) // debe imprimir en pantalla 5

// ejemplo 2

function saludo(arg){
    return arg;
}

let saludo_1 = saludo("Hola como vas?");
console.log(saludo_1) // debe imprimir como vas

// a las anteriores funciones se les conoce como Funcion declaration existen otras 3 formas de hacer uso de las funciones

// 1. IIFE (Inmediately invoked Function Expression) una funcion e se autoejecuta inmediatamente despues de ser definida esta funcion es anonima y no se puede reutilizar
// Ejemplo

// (function () {
   // console.log("Soy una IIFE");
  // })();

// 2. Funcion de expresion: Una funcion que se define como expresion y puede ser asignada a una variable. esta funcion tambien puede ser llamada y reutilizadad
// Ejemplo

let saluda = function(){
    console.log("Hola 30 dias con JavaScript y Platzi");
};
saluda();

// 3. Arrow function: un funcion que se define utilizand la sintaxis () => Esta funcion es una forma mas concisa de escribir funciones de una sola linea
//Ejemplo

let saludos = () => console.log("Hola Platzi");
saludos();

// Corchetes o llaves{}
// Las llaves se utilizan para encapsular bloque de codigo, funciones. bucles y otroselem,entos en javaScript, tambien se utilizan para declarar objetos, un tipo de dato que veremos en la siguiente clas

const carro = {
    color: "Rojo",
    llantas: 4,
    marca: "Audi"
}

console.log(carro);
