// En javaScript existen distintos tipos de datos que podemos utilizar para almacenar informacion. A continuacion presentamos una descripcion de los mas populares
// 1. NUMBERS : Tipo de dato que representa valores numericos, todos los numeros son tratados de la misma manera en javaScript
// Ejemplo

const edad = 45;
const pi = 3.14;
const salario = 1500.50;

// Tambnien se pueden utilizar notacion cientifica para numeros muy grandes o muy pequeños 
// Ejemplo

const numeroGrande = 1e6;
const numeroPequeño = 1e-6;
console.log(numeroGrande);
console.log(numeroPequeño);

// STRINGS: Son cadenas de texto (strings), y representa una secuencia de caracterers, En JavaScript, podemos crear strings utilizando comillas simples o comillas dobles
//Ejemplo:

const nombre = "Carlos Andres";
const apellido = 'Zarate'

// se pueden concatenar dos string con el oprador +
//Ejemplo:

console.log("Hola, " + nombre + " " + apellido + "!");

//Tambien se puede utilizar la notacion template literal (backtiks) para crear strings que uncluyan variables y expresiones
//Ejemplo:

console.log(`Hola, ${nombre} ${apellido}!`)

// JavaScript proporciona una serie sde metodos para manipular strtings. alguno de los metodos mas comunes son:
// 1. length: devuelve la longitud del string
// 2. toUpperCase(): Devuelve el string en mayusculas
// 3. toLowerCase(): Devuelve el string en minusculas
// 4. substgring(): Devuelve una parte del string

// Ejemplos

const curso = "30 dias aprendiendo javaScript";
console.log(curso.length);
console.log(curso.toUpperCase());
console.log(curso.toLocaleLowerCase());
console.log(curso.substring(0,5));


// OBJETOS: Son estructuras de datos que nos permiten almacenar  un conjunto de pares clave-valor, estospares son conocids como propiedades del objeto.
// para crear un objeto se deben utilizar las llave {} y especificar las propiedades del objeto mediante la sintaxis nombrePropiedad: valorPropiedad. los valores
// de las propiedades pude ser de cual quier tipo de dato, incluyendo otros objetos

// EJEMPLO:

const persona = {
    nombre: "Carlos Andres",
    apellido: "Zarate",
    platziRank: 9657,
    cursoFavorito: {
        nombre: "30 Dias JavaScript",
        clases: 30,
        duracion: "12 Horas"
    }
};
console.log(persona);

// para acceder a las propiedades de un objeto, podemos utilizar el operador . o la notacion de corchetes [] vamos a ver un ejemplo:

// EJEMPLO:

console.log(persona.nombre);
console.log(persona.cursoFavorito.nombre);
console.log(persona["platziRank"]);

// BOOLEANOS: Son un tipo de dato que representa un valor verdadero o falso. En javaScript podemos utilizar la palabra clave true para repreentar el valor de verdadero
// y false para representar la palabra falso

// EJEMPLO:

const cursoCompletado = true;
const lecturaCompletada = false;

// no pasa nada si no recuerdas el tipo de dato con el que estas trabajando dentro de javascript existe la instruccion typeof la cual nos dira el nomnbre 
// del tipo de dato con el que estamos trabajando

// EJEMPLO:

typeof "#PlatziChallenge";
console.log(typeof "#PlatziChallenge");
typeof 30;
console.log(typeof 30);
typeof true;
console.log(typeof true);
typeof {};
console.log(typeof {});

// con los arrays nos devuelve que son un objeto mas adelante describriremos la razon
typeof [];
console.log(typeof []);




