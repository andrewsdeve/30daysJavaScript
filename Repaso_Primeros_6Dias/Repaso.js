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

// TIPOS DE DATOS: en JS existen varios tipos de datos los cuales vamos a describir a continuacion:
/* DATOS NUMERICOS EN JS: 
1. Numeros Enteros ; 1,2,3,4,5,6,7,8......etc
2. Numeros Flotantes: 1.5,4.5 etc
3. Numero Infinito 1/0
4. Numero - infinito -1 / 0
5. NaN: NOT a Number


STRING: Siempre estan rodeadeos entre comillas " " , '' , ` ` 

BOOLEANOS: true o false

NULL : No existe objeto de referencia
UNDEFINED: LA VARIABLE NO HA SIDO ASIGNADA TODAVIA

OBJETOS Y SIMBOLOS: Tiene conexion de datos en su interior
TYPEOF: PARA SABER QUE TIPO DE VARIALBE

*/

// Tipo de Datos Numericos:

let numero_1 = 20;
let numero_2 = 35;
let operacion = numero_1 + numero_2;
console.log(typeof operacion);

let string_1 = "Hola";
let string_2 = "Mundo";
console.log(`${string_1}, ${string_2}`);

let nombres = null;
console.log(nombres);

let monitor;
console.log(monitor);

console.log(typeof string_1);

// STRINGS METHODS

let palabra = '30 dias aprendiendo javascript';

function esIgual (str1, str2){
    return string_1.toUpperCase()=== str2.toUpperCase();
}

console.log(esIgual("HOLA","HOLA"))
console.log(palabra.length);
console.log(palabra.toUpperCase);
console.log(palabra.toLocaleLowerCase());

//OBJETOS:

const persona = {
    nombre: "Juan",
    apellido: "Gomez",
    codigo: 1254,
    colorPiel: "Blanca",
    estudios: {
        Universidad: "Tadeo",
        Carrera: "Ing Sistemas",
        Sede: 'Centro',
        CodigoEstudiae: 457812
    },
    Altura: 1.70
};

console.log(persona);

// Metodos de la clase Number 
// 1. toPrecision():
let numero = 13.785412;
let a = numero.toPrecision();
let ab = numero.toPrecision(2);
let ac = numero.toPrecision(3);
let ad = numero.toPrecision(10);
console.log(ad);


/* Escriba una función con el nombre de esVocal() que tome un carácter , devuelva True si es vocal (no importa si es mayúscula o minúscula), y devuelva False en caso contrario. */

function esVocal (arg){
    if (arg == "a" || arg == "e" || arg == "i" || arg == "o" || arg == "u"){
        return "Es una Volca"
    }if (arg == "A" || arg == "E" || arg == "I" || arg == "O" || arg == "U"){
        return "Es una Vocal"
    }else{
        return "No es VOCAL"
    }
}

const respuesta = esVocal("A");
console.log(respuesta);

/* Crea una función llamada generar_caracteres() que tome como parámetro un número entero (n) y un carácter, retornar el carácter multiplicado por n. Por ejemplo, generar_caracteres(5,x), debería retornar «xxxxx». */

const genCaracteres = (numero, caracter) => {
    resp = '';
    for(let i =0; i < numero; i++){
        resp += caracter
    }
    return resp
}

const respuesta_1 = genCaracteres(20, "X");
console.log(respuesta_1);





