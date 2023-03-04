/*  Condicionales:
Estructura de Control IF : sirve para tomar decisiones en funcion de si una determinada condicion es verdadera o falsa, el codigo dentro de un bloque if solo se ejecutara si la condicion es verdadera, mientras que el codigo en un bloque else solo se ejecutara si la condicion es falsa.

la sintaxis basica de una estructura if es:*/

// if(condicion){
    //Codigo a ejecutar si la condicion es verdadera
//}else{
    // codigo a ejecutgar si la condicion es falsa
//}

/* Una de las formas mas comunes de utilziar una estructura if es comparando una variable con un valor especifico 
Ejemplo:
*/

let edad = 21;
if(edad >= 18){
    console.log("Eres Mayor de edad");
}else{
    console.log("Eres Menor de Edad")
}

/* Este ejemplo se establece una variable edad con un valor de 25 luego e utiliza una estructura IF para comprar si la edad es mahor o igual a 18, si es verdadero, se imprimir "eres mayor de edad" pero si es falso imprimie "Eeres menor de edad" */

/* tambien es posible utilizar varias condiciones en una estrucura if utilizando la palabra clave else if por ejemplo */

let calificacion = 96;

if(calificacion >= 95){
    console.log("Obtubista una A");
}else if (calificacion >= 80){
    console.log("Obtuvista una B");
}else if( calificacion >= 70){
    console.log("Obtuviste una C");
}else{
    console.log("Obtuviste una calificacion insuficiente");
}

/* En este ejemplo se establece una varibel calificaion con un valor de 75 luegse utiliza una estructura if-else-if para determinar en que rango de calificacion se encuentra si la calificaion es mayhor o igual a 90 */

