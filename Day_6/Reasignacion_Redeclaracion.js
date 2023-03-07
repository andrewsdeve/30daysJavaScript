/* En JS la reasignaciony la redeclaracion son dos conceptos diferentes relacionados con las variables, reasignacion se refiere al proceso de darle un nuevo vcalor a una variable existente por ejemplo:
 */

let numero = 5;
numero = 10;

/* Es importante mencionar que las variables declaradas con la palabra clave CONST no puede ser reasignadas ya quer su valor es constante si se intenta reasignar una variable declarada con const se generara un error en el codigo por ejemplo: */

const miNumero = 5;
 // miNumero = 5; En esta linea de codigo se gernera el error porque una variable declarada como const no puede ser reinicializada

 /* Por otro lado redeclaracion se refiere al proceso de crear una nueva variableon el mismo nombre de una variable existente ejemplo */

 let misNumeros = 5;
// let misNumeros = 10; En este caso no se puede volver a declarar una variable con el mismo nombre por ello generara un error, 
/* sin embargo es posible redeclarar una variable utilziando la palabra clave VAR en lugar de LET o CONST  */

var miVariable = 10;
var miVariable = 15;

/* por este motivo es importante ulitilizar las palabras reservadas LET O CONST para declarar variables ya que esto evita que se tenga errores o confucion en el codigo y tambien para evitar la rederclaracion accidental de variables */

// Se puede consultar el curso de CLOSURES Y SCOPE DE JAVASCRIPT EN PLATZI



