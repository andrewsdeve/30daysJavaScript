/* La estructura de control switch permite ejecutar diferentes bloques de codigo en fuion de un valor especifico. Es una alternativa a la estructgura if-else para casos en los que hay varios valores posibles para una variable y se desea ejecutar diferentes acciones en funcion de cada valor manteniendo legible el codigo.

La sintaxis basica de una estructura  Switch es la siguiente:
*/



/* La variable especificada en el switch se compara con cada uno de los casos especificos si se encuentra una condicion se ejecutra el codigo dentro del bloque corresponiente es imporartante notar que se utilizar la palbarea calve breack al final de cada bloqeu para indicar que se debe salir de switch una vez que se ha ejecutra el codigo correspondiente si no se inclucye break el codigo seguira ejecutrandodos en los siguientes casos 

el siguiente codigo imprimira un mensaje diferente en la consola dependiente el valor de la variable dia ejemplo:

*/

const dia = "dimioonoi";

switch(dia){
    case "lunes":
        console.log("Hoy es lunes");
        break;
    case "martes":
        console.log("Hoy es martes");
        break;
    case "miercoles":
        console.log("Hoy es miercoles");
        break;
    case "jueves":
        console.log("Hoy es jueves");
        break;
    case "viernes":
        console.log("Hoy es viernes");
        break;
    case "sabado":
        console.log("Hoy es sabado");
        break;
    case "domingo":
        console.log("Hoy es Domingo");
        break;
    default:
        console.log("Digite un dia de la semana valido");
}

// tambien puede hacer diferentes valoracioes dentro los casos switch por ejemplo

let numero = 111;

switch (true){
    case numero > 100:
        console.log("El numero es mayor a 100");
        break;
    case numero % 2 === 0:
        console.log("El valor es multiplo de 2");
        break;
    case numero % 2 !== 0:
        console.log("El valor no es multiplo de 2 ")
        break;
    default:
        consolse.log("El valor no cumple con ninguna de las caracteristicas");
}