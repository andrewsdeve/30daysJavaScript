/* son  una herramienta esencial dentro de javascript sivern parareptrir un bloque de cigo varicas veces dependiente de una condicion especifica los ciclos son fundamentales para la automaatizacion de tares y la efeciciencia del codigo, existen dos tipo sde cliclos FOR  Y WHILE ambos tienen una sintaxis similiar pero se utilizan en situasciones diferentes

el ciclo FOR es utilizado para repetir bloque de codigo con numero especifico de veces su sintaxis basica es:

for (inicializacion; condicion; actualizacion){
    //codigo a ejecutar
}

La inicializacion se ejecuta una sola vez al prinipio del ciclo, la condicion se evaluaen cada iteracion antes de ejecutar codigo dentro del ciclo y la actualizacion se ejecutara al final de cada iteracion por ejemplo el siguiente ciclo FOR imprimira los numero de 1 al 10 en la consola

*/

for(let i = 1; i <= 10; i++){
    console.log(i);
}

/* tanbien existen los cicos for-in y for-of el ciclo for-in se utiliza para recorrer las propiedades de un objeto  mientras el ciclo for-of se utiliza para recorrer los elementos de una coleccin como un array

el uso de un ciclo for in es la siguiente

*/

const user = {
    name: "Carlos Martinez",
    age: 20,
    roje: "JavaScript developer"
}

for (const prop in user){
    console.log(user[prop])
}

const informacion = {
    nombre:"Juan Linares",
    edad: 25,
    profesion: "Ingeniero",
    rol: "Developer Senior",
    direccion: "Oficina Principal calle 127",
    }

for(const prop in informacion){
    console.log(informacion[prop]);
}

/* Por otro lado la sintaxis de un ciclo for-of esla siguiente
 */

const lenguajesProgramacion = ["JS", "Python", "C++", "React"]
for(const elemento of lenguajesProgramacion){
    console.log(elemento)
}

const nombres = ["Juan","Pedro","Darop","Anibal"]
for(const elementos of nombres){
    console.log(elementos)
}

// la variable nombres es la que se encarga de recorre los elementos del array para imprimirlos en pantalla

/* EL CICLO WHILE se utilizxa para repetir un bloque de codigo mientras se cumpla una determinada condicion su sintaxis basica s la siguiente

while (condicion){
    //codigo a ejecutar
}

la condicion se evalua antes de ejecutar el codigo dentro del ciclo y si la condcion es verdadera el codigo se ejecutara de nuevo, por ejemplo si quisieramos hacer una implementacion del emplo anterior con los nmeros de 1 al 10 quedaria de la siguiente manera
*/

let i = 1;
while(i <= 100){
    console.log(i);
    i++;
}

/* existe una externcion de while llamda do while que tiene una pequenna diferencia el codigo dentro del ciclo se ejecutara al menos una vez antes de evaluar la condicion por ejemplo: */

let g = 1;
do{
    console.log(g);
    g++;
}while(g <=90);


function printTriangle(size, character) {
    let triangle = "";
    let characterNumber = 1;
    while(characterNumber <= size){
        for (let j = 0; j < size - characterNumber; j++) {
          triangle += " ";
        }
        for (let j = 0; j < characterNumber; j++) {
          triangle += character;
        }
      if (characterNumber < size) { triangle += `\n` };
      characterNumber++;
      }
    
    return triangle;
  }
  console.log(printTriangle(5,9))

