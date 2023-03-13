/* ASINCRONISMO: lenguaje asincronico lo que signbifica que las operaciones no blequean el hilo de ejecucion principal esto significa que varias operaciones pueden ocurrir al mistiempo sin afectar el rendimiento del programa, en lugar de bloquear el hilo de ejecucion mientras se carga la imagen, el navegador carga la imagen en segundo plano y noticia al pgorama esta lista para ser utilizada medieta una funcion callback

PROMESAS: Es un mecanismo para manejar operacionea asincronas en JS de manera mas limpia y facil de leer, permiten que una funcion asincrona devuelva una promesa que es basicamente una forma de representar un valor que estara disponible en el futuro y sea de manera exitosa o con un error
para crear una promesa se utolizar el constructor Promise el cual acepta una funcion que a au vez recibe dos parametros RESOLVE O REJECT, el primero se utiliza para indicar que la operacion se completo correctamente y se puede obtener el valor mientra qaue el segundo se usa para indicar que la operacion ha fallado y se devuelve el error correspondiente

por ejemplo podemos crear una promesa que resuelva con el numero 42 despues de 2 segundos:*/

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(42);
    }, 2000);
  });
  

  /* Podemos encadenar promesas para ejecutar multiples operaciones asincronicas de manera secuencial, para ello se utiliza el metodo then de una promesa el cual recibe como prametro una funciona que se eecutara cuando la promesa se resuelva correctamente esta funcion puede devolver otra promesa lo que permite encadenar multiples operaciones.
  
  Por ejemplo podemos crear una promesa que resueva con un objeto que contenga el numero 42 y una cadena despues de 2 segundos, y luego encadenar otra promesa que devuelva una cadena que contenga el doble del numero de promesa anteiror. */

  const promise_1 = new Promise ((resolve, reject ) => {
    setTimeout(() => {
        resolve ({number: 42, text:"Hello"});
    }, 2000)
  });