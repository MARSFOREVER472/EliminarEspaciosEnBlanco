// Eliminar espacios en blanco en JavaScript:

// Función 1: Usando el "trim()":

// let userInput = prompt("Enter your text here:");

// console.log(userInput.trim());

// let miVariable = "       Hello Internet!!!       ";

// console.log(miVariable);

// console.log(miVariable.trim());

// Función 2: Usando el "trimStart()":

// console.log(miVariable.trimStart());

// NOTA: ESTA FUNCIÓN ELIMINA LOS ESPACIOS EN BLANCO QUE EXISTAN AL PRINCIPIO DE LOS DATOS!

// Función 3: Usando el "trimEnd()":

// let userInput2 = prompt("Enter your text here:");

// console.log(miVariable.trimEnd());

//        Hello Youtube!

// NOTA: ESTA FUNCIÓN ELIMINA LOS ESPACIOS EN BLANCO QUE EXISTAN AL FINAL DE LOS DATOS!

// P.D.: HA ELIMINADO LOS ESPACIOS EN BLANCO AL FINAL, PERO NO ELIMINA LOS ESPACIOS EN BLANCO QUE EXISTEN AL PRINCIPIO!

// Función 4: Usando el "trimLeft()":

// console.log(miVariable.trimLeft());

// NOTA: ESTA FUNCIÓN ELIMINA LOS ESPACIOS EN BLANCO QUE EXISTAN AL PRINCIPIO DE LOS DATOS!

// Función 5: Usando el "trimRight()":

// console.log(miVariable.trimRight());

// Y SI LO COMBINAMOS CON UNA DE LAS 2 FUNCIONES Y QUE ALGO PUEDA RESULTAR?...

// console.log(miVariable.trimStart().trimEnd());

// APLICACIÓN REAL DE LO APRENDIDO EN ESTE PROYECTO...

let userInput = prompt("Introduce un texto: ");

console.log(userInput); // FORMA PRINCIPAL!

console.log(userInput.trim()); // FUNCIÓN 1.

console.log(userInput.trimStart()); // FUNCIÓN 2.

console.log(userInput.trimEnd()); // FUNCIÓN 3.