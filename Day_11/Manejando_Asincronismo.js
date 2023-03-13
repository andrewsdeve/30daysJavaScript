/* Manejando el asincronismo

Las promesas sn una caracteristica importante de JavaScript para manejar operacnes asincronas y controlar el flujo pero coo se manejan las promeas en el codigo de forma eficiente y efectiva, vamoa a discotur dos formar de manejar las promeas median callbacks y mediante asing / await

CALLBACK: son funciones que se pasan como argumentos a otra funcion y se llaman edn alun omento despued de que se complete la operacion asincronia, un callback es una forma de manejar la respuesta deuna promesa

veamos un ejemplo:

*/

function getUserData(userId, callback) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(data => callback(data))
      .catch(error => console.log(error))
  }
  
  function displayUserData(data) {
    console.log(data.name);
  }
  
  getUserData(3, displayUserData);

  /* En este ejemplo, se define una función getUserData que toma un ID de usuario y un callback como parámetros. Dentro de esta función, se llama a la API de jsonplaceholder y se obtiene el objeto de datos del usuario. Luego, se llama al callback con los datos del usuario como argumento. En este caso, el callback es la función displayUserData que simplemente muestra el nombre del usuario en la consola.

La desventaja de usar callbacks es que puedes crear un Callback Hell, que es un anti-patrón producido por anidar múltiples callbacks dentro de otros callbacks en un código asíncrono. Esto puede ocurrir cuando un código asíncrono necesita realizar múltiples operaciones de manera secuencial, donde la ejecución de una operación depende de los resultados de la operación anterior. Este anti-patrón puede hacer que el código sea difícil de entender, mantener y depurar.  */

/* PROMESAS: 
Una forma de evitar los callbacks Hell es utilizar promesas o Async/Await que proporcionan una forma mas estructurada y facil de leer para manejar codigo asincrono por ejemplo el codigo anterior puede reescribir utilizando promesas de la siguiente manera:*/

operation1()
  .then(result1 => {
    return operation2(result1);
  })
  .then(result2 => {
    return operation3(result2);
  })
  .then(result3 => {
    return operation4(result3);
  })
  .then(result4 => {
    // ...continuar con más operaciones
  })
  .catch(error => {
    // Manejar errores
  });

  /* En este ejemplo, cada operación devuelve una Promesa que se encadena usando el método then(). Esto hace que el código sea más legible y fácil de seguir en comparación con la versión anterior. */

  /* Async / Await
  es una forma mas moderna y legible de manejar promesas en lugar de usar callbacks anidados async/await permite que el codigo perezca mas secuencial y facil de leer ejemplo */

  async function getUser(userId){
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error);
    }
  }

  async function displayUserData(userId){
    const data = await getUserData(userId);
    console.log(data.name)
  }

  /* En este ejemplo, se define una función getUserData que hace la misma llamada a la API que en el ejemplo anterior, pero esta vez usa await para esperar la respuesta y el try/catch para manejar los errores. La función displayUserData también utiliza await para esperar que se resuelva la promesa retornada por getUserData y luego muestra el nombre del usuario en la consola.
  
  Concluion:
  
  El uso de callbacks y async/await son formas efectivas de manejar promesas en JavaScript. Aunque ambos métodos tienen sus ventajas y desventajas, async/await se ha convertido en la opción preferida para muchas personas debido a su legibilidad y sintaxis más clara. Sin embargo, aún hay situaciones en las que los callbacks pueden ser la mejor opción, especialmente en situaciones donde se necesitan múltiples llamadas asincrónicas en secuencia.
  
  */
