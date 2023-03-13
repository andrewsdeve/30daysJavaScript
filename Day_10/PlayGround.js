/* ES6 fue lanzado en Junio 2015 ny trae una gran cantidad de caracteristicas nuevas y mejoras al lenguaje algunas de las caracteristicas mas importantes incluyen:
1. Sintaxis de clases: ES6 introduce una nuevas sintaxis para la creacion de clases en JavaScript esto hace que el codigosea mas facil de leer y entender, especialmente para desarrolladores con experiencia en lenguanjes orientados a objetos
*/
class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`)
    }
}
const persona = new Persona ("Juan",30);
persona.saludar()

/* Template literals introduce una nueva sistanxis para crear cadenas de texto de manera mas sencilla y legible esto permite la interpolacon de variables y expresiones dentro de las cadenas de texot EJEMPL:  */

const nombre = "Juan";
const edad = 30;
console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años`)

/* ARROW FUNCTIONS: ES6 introduce una nueva sintaxis para crear funciones anonimas de manera mas corta y sencilla, Esto hace que el codigo sea mas legible y facil de escribir por ejemplo:  */
const numeros = [1,2,3,4,5,6];
const doubles = numeros.map(n => n * 2);
console.log(doubles);

/* SPREAD OPERATOR: el spread operator es una caracteristica que permite expandir un array o un objeto en una lista de valores se representa con los (...) y se utiliza para copiar elementos de un array a otro o para combiar elementos de varios arrays en uno solo, tambien se utiliza para pasar argumentos a una funcion de manera dinamica EJEMPLO: */

const numeros_1 = [1,2,3,4,5,6,7,8,9];
const nuevosNumeros = [...numeros_1,10,11,12];
console.log(nuevosNumeros);

/* Destructurig: ES6 introduce una nueva sintaxis para asignar valores de un objeto o un array avariables de manera mas sencilla y legible ejemplo: */

const persona1 = {nombre: "Juan", edad: 30};
const {nombre1, edad1} = persona1;
console.log(nombre1); // Output: "Juan"
console.log(edad1); // Output: 30

/* NUEVOS METODOS DE ARRAY ES6 incluye metodos como array.prototype.find y array.prototype.findIndex que facilitan la busqueda d elementos en un array */

const masNumeros = [1,2,3,4,5];
const encontrado = masNumeros.find(n => n === 3);
console.log(encontrado);

/* Manejo de Promesas:  ES6 incluye mejoras al manejo de las promesas y permitiendo la utilizacion de metoodos como PROMISE.PROTOTYP.FINALLY para ejecutar codigo independitnemente del resutlaado de la promesa */

const miPromesa = new Promise((resolve, reject) => {
    // código
  });
  miPromesa.finally(() => console.log('Promesa finalizada'));

  /* Try Catch: En cuanto al manejo de errores y excepciones ES6 incluye la introduccion de la palabra try-catch para el manejo de bloques de codigo que pueden generar excepciones */

  try {
    // código que puede generar excepciones
  } catch (error) {
    console.log(error);
  }

  


   function createTaskPlanner() {
    // Empezamos con un array vacío
    // aquí almacenaremos las tareas
    let tasks = [];
  
    // retornamos las funciones 
    // que servirán para manipular el array
    return {
      // La función de agregar tareas debe recibir una tarea
      addTask(task) {
        // Por lógica al añadir una nueva tarea inicia sin estar completada
        task.completed = false;
        // Una vez modificada la enviamos al array
        tasks.push(task);
      },
  
      //  Ahora la función para remover tareas
      removeTask(value) {
         // Dependiendo si el valor es un número o un string
        if (typeof value === "number") {
          // Si es un número, filtramos todas las tareas que no tengan el mismo valor
          //  y luego lo reasignamos al array de tareas
          tasks = tasks.filter((task) => task.id !== value);
        } else {
          // En caso de ser un string, hacemos lo mismo pero con la propiedad de .name
          tasks = tasks.filter((task) => task.name !== value);
        }
      },
  
      // Para obtener las tareas simplemente las retornamos
      getTasks() {
        return tasks;
      },
  
       // Para obtener las tareas pendientes o completadas simplemente las filtramos
      // y retornamos el resultado
      getPendingTasks() {
        return tasks.filter((task) => !task.completed);
      },
  
      getCompletedTasks() {
        return tasks.filter((task) => task.completed);
      },
  
      // Para marcar una tarea dependiendo el valor recibido
      markTaskAsCompleted(value) {
        // primero declaramos la variable de index
        // la cual tendrá el indice de la posición del elemento
        let index;
  
       // buscamos el indice dependiendo el valor
        if (typeof value === "number") {
          // buscamos por index dependiendo si es por id
          index = tasks.findIndex((task) => task.id === value);
        } else {
          // O por name
          index = tasks.findIndex((task) => task.name === value);
        }
  
        // Al final con ese indice modificamos la propiedad de completed a true
        tasks[index].completed = true;
      },
  
      getSortedTasksByPriority() {
        // Para ordenar las tareas sin modificar el array original
       // solamente hacemos una copia del array y ejecutamos sort sobre este
        const sortedTasks = [...tasks].sort((a, b) => a.priority - b.priority);
        // Al final lo retornamos
        return sortedTasks;
      },
  
      filterTasksByTag(tag) {
        // Filtramos las tareas que incluyan cierto tag
        return tasks.filter((task) => task.tags.includes(tag));
      },
  
      updateTask(taskId, updates) {
       
        // obtenemos el id como lo hicimos previamente
        const index = tasks.findIndex((task) => task.id === taskId);
        // agregamos las propiedades extras destructurando ambos objetos
        tasks[index] = { ...tasks[index], ...updates };
      },
    };
  }

