/* VARIABLES: Es una asignacion en la memoria para luego ser ejecutada ejemplo: */

let miVariable;

// anterioremente estamos declarando la variable pero no la estamos inicializando, ahora vamos a iniciarlizar la variable:

miVariable = 10;
console.log(miVariable);

// de igual forma se puede declara e inicializar la variable ejemplo:

let miVariable_1 = 15;
console.log(miVariable_1);

/* EJERCICIOS: a la variable a se le asigna un valor 10 a la variable b se le asigna un valor 5 la variable resultado contiene la suma de a y b */

let variable_a =10;
let variable_b =5;
resultado = variable_a + variable_b;
console.log(resultado);

/* Ejercicio 2: Se añade 1 al valor que contiene la variable num_1 // se añade 5 al valor que contiene la variable num_2 */

let num_1 = 0;
let num_2 = 0;
// se puede hacer el incremento de dos formas
// forma # 1

num_1 = num_1 + 1;
num_2 = num_2 +5;

// forma # 2

num_1 +=1;
num_2 += 5;

console.log(num_1)
console.log(num_2);

/* las variables tambien se pueden utilizar con string y concatenar ejemplo: */

let nombre = "Carlos Andres"
let apellido = "Martinez Zarate";
console.log(nombre + apellido);
// tambien se puede utilizar los backtiks ejemplo:

console.log(`${nombre}, ${apellido}`); // Es la manera mas utilizada en JS
console.log(`Hola!! tus nombres son:  ${nombre} y tus apellidos ${apellido} gracias por tu atencion!! `)






