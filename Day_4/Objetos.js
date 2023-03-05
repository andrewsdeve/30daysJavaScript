/*OBJETOS: Los objetos en JavaScript son un tipo de dato que permite almacenar una coleccion de pares clave-valor estos pares representan las propiedades y sus valores correspondientes de un objeto los objetos son similares a los arrays en cuantoa que tambien son una forma de almacenar y manejar datos pero en lugar de tener unn indice numero tiene una clave de string EJEMPLO:  */

const miObjeto = {
    clave_1: "valor_1",
    clave_2: "valor_2",
    clave_3:"valor_3"
}

console.log(miObjeto);

/* El siguiente codigo crear un objeto llamado curso que tiene cinco propiedades clases, duracion, nombre, detalles y comentarios */

const curso = {
    nombre: "30 dias de JS",
    duracion:"20 horas",
    clases: 100,
    detalles: {
        tecnologias: ["JS","Node","Web","Browser"],
        calificion:5,
    },
    comentarios: ["Excelente Curso", "JavaScript no es lo mismo que java", "Hola"]
};
console.log(curso);

/* Para acceder a las propiedades de un objeto se utiliza la notacion de punto o la notcaion de cochetes por ejemplo para acceder al nombre del curso anterior se utiliza la siguiente sintaxis */

console.log(curso.nombre);
console.log(curso["nombre"])

// ademas de las propiedades los objetos tambien tienen metodos que son funciones asociadas a un objeto por ejemplo el siguiente codigo crea un objeto carro una propiedad marca y un metodo encender

let carro = {
    marca: "Toyota",
    encender: function(){
        console.log("El carro ha sido encendido")
    }
};

/* para llar un metodo de un objeto se utiliza la notacion de punto por ejemplo */

carro.encender();

/* JS tambien tiene una caraceristica prototype que permite agregar propiedad y metodos a un objetode forma dinamica esto permite a los desarrolladores crear nuevos objetos a patir de objetos existentes y heredar sus propiedades y metodos pero esto lo veras mucho mas adelante  */