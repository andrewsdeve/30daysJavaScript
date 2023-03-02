// OPERADORES: Son elementos de lenguaje que nos permite realizar calculos y comparaciones en javaScript, aqui hay una lista de operdores comunes
// OPERADORES ARITMETICOS: Nos permiten realizar operaciones matematicas basicas, como la suma, resta, multiplicacion, division.

// suma
console.log(1 + 3);

// Resta
console.log(5-4);

// Multiplicacion  
console.log(3 * 4);

//Division
console.log(10 / 2);

//Modulo devuelve el resto de una division
console.log(10 % 3);

// OPERADORES DE ASIGNACION
//Nos permiten asignar valores a las variables

let x = 10;
x += 5; // x = x + 5

x -= 3;
console.log(x);

x *= 2;
console.log(x);

// Operadores de comparacion: Nos permiten comparar valores y n os devuelven TRUE O FALSE segun el resultado de la comparacion

console.log(1 < 2);
console.log(2 > 2);
console.log(1 <= 2);
console.log(2 >= 1);
console.log(1 !== 2);

// existen dos operadores de igualdad los cuales son == y === 
// == realia una comparacion de valor
// === ademas de comparar el valor tambien verifica el tipo de dato es recomendable utilizar este operador de comparacion 

console.log(1 == '1');
console.log(1 === '1');

//OPERADORES LOGICOS: Son aquellos que nos permite realizar operaciones logicas,es decir, comparaciones y evaluaciones. En javascript tenermos dipsonibles los siguientes:

// 1. AND (&&): Este operador logico evalua si ambas expreciones son verdaderas. SI ambas expresiones son verdaderas devuelve true, de lo contrario devuelve false 
//Ejemplo:

let edad = 10;
let mayorEdad = edad >= 18;

if (edad >= 18 && mayorEdad){
    console.log('Eres mayor de edad')
}else{
    console.log('Aun eres menor de edad')
}

//OR (||): Este operador evalua si al menos una de las expresiones es verdadera si al menos una de las expresiones es verdadera devuelve true de lo contrario devuelve false 
//Ejemplo:

let su_edad = 17;
let tieneIdentificacion = true;
if(su_edad >= 18 || tieneIdentificacion){
    console.log('Puedes entrar al bar');
}else{
    console.log('No tienes la edad o la identificacion o la identificacion suficiente para entrar al bar');
}

//NOT(!): Este operador logico invierte el valor de la expresion, Si la expresion es verdadera, devuelve false, de lo contrario devuelve true 
// EJEMPLO:

let esFinDeSemana = false;
if(!esFinDeSemana){
    console.log('A Trabajar')
}else{
    console.log('A disfrutar el fin de semana');
}