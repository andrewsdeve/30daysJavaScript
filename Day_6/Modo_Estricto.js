/* Javascript cuenta con un modo estricto que es un conjunto de reglas y carcteristicas que proporcionana una mayor seguridad y control en el codigo, el modo estcto se activa mediante la palabra clave USE STRICT al comienzo del archivo o al principio de una funcion

una de las princiopales ventajas de utilizar el modo estricto  es que ayuda a evitar errores comunes en el codigo, Por ejemplo, en modo estricto no se purede redeclarar una variable con el mismo nombre en el mismo ambito loq que evita confuciones y errores en el codigo EJEMPLO:*/

"use strict"
let numero = 5;
// let numero en este punto genera ela alerta que no se puede declarar una variable con el mismo nmbre en el mismo ambito

/* ademas en modo estricto no se puede cambiar el tipo de dato de una variable al momento de hacer una asignacion ejemplo */

function miFuncion (){
    "use strict"
    let numero = 5;
    numero = "10";
}
console.log(miFuncion())

/* El modo estricto tambien proporciona mejoras la performance de codigo, por ejemplo en modo estricto el codigo se ejecuta mas rapdio ya que no se utilizan ninguna comprobaiones y conversiones quse realizan en modo no stricto

En resumen, el modo estricto es una herramienta útil en la programación en JavaScript que proporciona una mayor seguridad, control y performance en el código. Es recomendable utilizar el modo estricto en todos los proyectos de JavaScript para evitar errores comunes y problemas de seguridad. Sin embargo, es importante tener en cuenta que el modo estricto puede generar algunos problemas al trabajar con código existente que no está escrito en modo estricto, por lo que se debe utilizar con precaución.*/


