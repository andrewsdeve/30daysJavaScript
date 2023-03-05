/* En este desafío, deberás calcular el promedio general de una clase, así como el promedio individual de cada estudiante.

Para ello, se te proporcionará un array de objetos, cada uno de los cuales representará a un estudiante y tendrá las siguientes propiedades:

    name: El nombre del estudiante
    grades: Las notas de cada materia del estudiante

A partir de esta información, debes retornar un nuevo objeto que tenga la propiedad classAverage con el promedio de la clase y un array de students con los estudiantes y sus promedios individuales.

Es importante mencionar que los promedios deben ser calculados con precisión y se deben redondear a dos decimales para que los test pasen sin problema alguno. Puedes usar el método toFixed() el cual se usa de la siguiente manera 👇 */

function getStudentAverage(students) {
    // Tu código aquí 👈
    let total = 0;
    const course = {
      classAverage: 0,
      students: []
    };
    for (const student of students) {
      let sum = student.grades.reduce((sum, grade) => sum + grade);
      let averageStudent = (sum / student.grades.length).toFixed(2);
      const aStudent = {
        name: student.name,
        average: Number(averageStudent)
      }
      course.students.push(aStudent);
      total += Number(averageStudent);
    }
    course.classAverage = Number((total / students.length).toFixed(2));
    return course;
  }

  function findLargestPalindrome(words) {
    // Tu código aquí 👈
    //primero creamos un array con los palindromos 
    let rta = [];
    for (let index = 0; index < words.length; index++) {
      const element = words[index];
      let wordInvert = element.split('').reverse().join('');
      if (element === wordInvert) {
        rta.push(element);
      }
    }
    // esta seccion es para escoger el palindromo mas largo y que sea el primero, ademas botara null de no haber un palindromo 
    if (rta != 0) {
      let rtaFinal = rta[0];
      console.log(rta);
      for (let index = 0; index < rta.length; index++) {
  
        if (rtaFinal.length < rta[index].length) {
          rtaFinal = rta[index];
        }
      }
      return rtaFinal;
    } return null;
  }

  // Ejercicios

  const a = [];
  const b = [1,true,"Juann",10.5];
  console.log(b);
  