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
    }, 1000)
  });
  promise_1
    .then((result)=>{
        const doubleNumber = result.number * 2;
        return doubleNumber.toString();
    })

    .then ((result) => {
        console.log(`the result is ${result}`)
    })
    .catch((error) => {
        console.log(error)
    });

    /* setInterval y setTimeout:   los temporizadores son una caracteristica importnte en JavaScript para programar tareas para que se ejecutgen en el futuiro dos de los temporizadores mas comunes son setTimeout y setInterval

    setTimeout: es una funcion que permite programar una tarea para que se ejecute despues de un cierto periodo de tiempo en milisegundos la funcion toma dos parametos la funcion q se debe ejecutar despues del tempo especificado y el tiempo en milisegundos antes de que se ejecute la funcion 

    ejemplo: supongamos que queremoimprimir un mensaje despues de 5 segundos podemos utilizar setTimeout de la siguiente forma
    
    */

    setTimeout(() => {
        console.log("Hola mundo")
    },1000);

    /* hay que tener encuenta que setTimeout devuelve un identificar dunico que puede ser utilizado para cancelar el temporizador antes de que se ejecute para esto podemos unasa la funcion clearTimeout y pasarle el identificar como argumento ejemplo */

    let id = setTimeout(() => {
        console.log("Han pasado 5 segundos")
    },5000)

    clearTimeout(id);

    /* Otro temporizador es setInterval  con setTimeout setInteval se utiliza para programa una tarea para que se repita en un intervcalo de tiempo determinado, la funcion toma dos parametros la funcion se debe ejecutar en cada intervalo y la duracion de cada intervalo en milisegundos por ejemplo suponngamos que queremos imprimir un mensaje cada dos segundo podemos ussar setInterval de la siguiente manera: */

    setInterval(() => {
        console.log("Han pasado 2 segundos");
    },2000);

    /* Es importante tener en cuenta que tanto setTimeout como setInterval son funciones asincr??nicas. Esto significa que no bloquean la ejecuci??n del c??digo, lo que permite que otras tareas se ejecuten mientras se espera que se complete la tarea programada.

Para trabajar con temporizadores en conjunto con promesas, debes entender c??mo se puede utilizar el m??todo setTimeout() dentro de una promesa para crear una tarea asincr??nica que se resolver?? o rechazar?? despu??s de un per??odo de tiempo determinado.

Al crear una promesa con setTimeout(), podemos utilizar el constructor new Promise(). La funci??n interna debe contener el c??digo que se ejecutar?? en el futuro y, finalmente, llamar?? a resolve() o reject() para indicar si la tarea se complet?? correctamente o no.

Un ejemplo de promesa con setTimeout() podr??a verse as??: */

function wait(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
              const seconds = ms / 1000
        resolve(seconds);
      }, ms);
    });
  }
  
  // ejemplo de uso
  wait(2000).then((seconds) => {
    console.log(`Han pasado ${seconds} segundos`);
  });

  /* En este ejemplo, la funci??n wait() toma un argumento ms, que representa el n??mero de milisegundos que se deben esperar antes de resolver la promesa. Dentro del constructor new Promise(), se llama a setTimeout() para crear una tarea asincr??nica que llamar?? a resolve() despu??s del n??mero de milisegundos especificado. La funci??n wait() devuelve la promesa creada.

Cuando se llama a wait(2000), se crea una nueva promesa que se resolver?? despu??s de 2 segundos. Despu??s de que se resuelva la promesa, se llama a la funci??n then() y se ejecuta la funci??n de devoluci??n de llamada, que simplemente registra con la variable seconds que es devuelta al resolverse la promesa un mensaje en la consola.

Tambi??n podemos usar setTimeout() en conjunto con reject() para manejar errores en una tarea asincr??nica. Si ocurre un error durante la ejecuci??n de la tarea, podemos llamar a reject() con un objeto de error para indicar que la tarea ha fallado.

Un ejemplo de promesa con setTimeout() que maneja errores podr??a verse as??: */


function wait(ms) {
    return new Promise((resolve, reject) => {
      if (ms < 0) {
        reject(new Error("El n??mero de milisegundos no puede ser negativo"));
      } else {
        setTimeout(() => {
                  const seconds = ms / 1000
          resolve(seconds);
        }, ms);
      }
    });
  }
  
  // ejemplo de uso
  wait(-2000)
    .then((seconds) => {
      console.log(`Han pasado ${seconds} segundos`);
    })
    .catch((error) => {
      console.error(error.message);
          // El n??mero de milisegundos no puede ser negativo
    });

    /* En este ejemplo, la funci??n wait() verifica si el argumento ms es menor que cero. Si es as??, se llama a reject() con un objeto de error que indica que el n??mero de milisegundos es inv??lido. Si ms es mayor o igual a cero, se llama a setTimeout() para crear la tarea asincr??nica que llamar?? a resolve() despu??s del n??mero de milisegundos especificado. La funci??n wait() devuelve la promesa creada. */

    
