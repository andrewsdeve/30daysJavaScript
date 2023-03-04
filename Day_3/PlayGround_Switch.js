function getPetExerciseInfo(type, age) {
    switch(type){
        case "perro":
            if(age < 1)
            return "Los cachorros necesitan pequeñas y frecuentes sesionese juego"
            else if(age >= 1 && age <=7)
            return "Los perros a esta edad necesitan caminatas diarias y sesiones de juego"
            else if (age > 7)
            return "Los perros viejos necesitan camintas mas cortas"
            break;
        
            case "gato":
                if(age < 1)
                return "Los gatitos necesitan frecuentes sesiones de juego"
                else if (age >= 1 && age <=7)
                return "Los gatos a esta edad necesitan jugar diariamente"
                else if(age > 7)
                return "los Gatos viejos necesitan sesiones de juego mas cortas"
                break;
            
            case "aves":
                if (age < 1)
                return "Las aves jovenes necesitan mucho espacio para volar"
                else if(age >= 1 && age <= 7)
                return "Las aves necesitan jugar diariamente y un lugar para volar"
                else if(age > 7)
                return "Las aves Mayores necesitan descansar mas, pero siguen ocupando un lugar para volar"
                break;
            default:
                return "Escriba una especie de animal valido"
    }
  }

  console.log(getPetExerciseInfo("perro",0.5));
  