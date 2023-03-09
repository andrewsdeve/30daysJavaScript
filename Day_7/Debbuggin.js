/* Dentro de JS los errores van a ser tus mejores amigos por lo que se debe aprender a lidiar con esotos mediante tecnicas como el debugging
Debugging es el proceso de encontrar y corregir errores en el codigo, es una parte importante del desarrollo de software y es esencial para garantizar que el codigo funcione correctamente, En JS hay varias herramientas y tecnicas diponibles para ayudar en el debugging y manejo de errores una de las herramientas mas comunes para manejar errores en JS es el bloque try-catch este bloque permite ejecutar codigo que podria generar errory capturar ese error en caso que ocurra por ejemplo:  */

try {
    //Codio que podria generar error
}catch(error){
    // Codigo que se ejecuta si ocurre un error
    console.log(error);
}

/* El bloque try-catch permite ejecutar codigo que podria generar un error de forma segura y capturar el error para poder manejarlo de manera adecuada. por ejemplo si se esta tratando de divivier un numero por cero, se puede capturar el error y mostrar un mensaje de error al usuario en lugar de tener que  detener el programa.

l forma mas comun de manejar errores es a travez ded la sentencia throw new Error, la sentencia throw se utiliza para generar una excepcion o error en tiempo de ejecucion y new error crea un nuevo objeto de error con un mensaje personalizao, este mensaje es util para proporcionar informacion sobre el error y para facilitar la socilcion de problemas 

aqui hay un ejemplo de codigo que muesta como utilizar throw new Error para generar un error y capturarlo con un bloque try-catch*/


try{
    const num =100;
    if(num > 50){
        throw new Error("El numero es mayor a 50")
    }
}catch(error){
    console.error(error.message);
}

/* En este ejemplo, si el número num es mayor a 50, se lanzará una excepción con el mensaje "El número es mayor a 50". El bloque catch capturará el error y lo imprimirá en la consola.

Es importante tener en cuenta que el manejo de errores con throw new Error solo se recomienda para errores en tiempo de ejecución y no para errores de sintaxis.

Otra herramienta útil para el debugging en JavaScript es el comando “debugger”. Este comando se utiliza para detener la ejecución del código en un punto específco, lo que permite inspeccionar variables y entender el estado del programa en ese momento. Por ejemplo: */

let numero = 50;
debugger;
let resultado = numero /2;
console.log(resultado);

/* En este ejemplo, la ejecución del código se detiene en la línea con “debugger” y se pueden inspeccionar las variables y entender el estado del programa en ese momento (puedes ejecutar este código desde la consola del navegador y ver que pasa 👀).

La consola de JavaScript también es una herramienta útil para el debugging. La consola proporciona varios comandos para inspeccionar el código y entender el estado del programa. Por ejemplo, el comando “console.log()” permite imprimir valores en la consola para inspeccionarlos, el comando “console.table()” permite ver los valores de un objeto o array en forma de tabla, entre otros. */

