const alumnosMali = [];

/* alumnosMali = ['willinton', 'laura', 'jorge', 'luis', 'rick']; */
//      0         1       2       3     4


// En los arreglos empezamos a contar desde el 0.

// Forma inadecuada de agregar algo en un arreglo.

alumnosMali = ['willinton', 'laura', 'jorge', 'luis', 'rick', 'camila'];



/* Metodos: Acciones relacionadas a un elemento, no viven sin ese elemento (Log - Write)

console.log();
document.write(); 

Los arreglos van a tener metodos que nos permitan interactura con ellos.

*/

alumnosMali.push('Sandra');

/*
Esta función agrega un objeto en un arreglo. Ej:

 alumnosMali = ['willinton', 'laura', 'jorge', 'luis', 'rick', 'camila', 'Sandra']; */

alumnosMali.pop();

/*
Esta función elimina al ultimo objeto en un arreglo. Ej:

 alumnosMali = ['willinton', 'laura', 'jorge', 'luis', 'rick', 'camila']; */


alumnosMali.shift();

/*
Esta función elimina al primer objeto en un arreglo. Ej:

alumnosMali = ['laura', 'jorge', 'luis', 'rick', 'camila']; */

alumnosMali["3"];

/* Puedo llamar cualquier objeto de mi arreglo 
 3 = Luis         */

alumnoMali[3] = "Alejo"

/* Puedo cambiar un objeto de un arreglo asignandolo con la posición 

 alumnosMali = ['willinton', 'laura', 'jorge', 'Alejo', 'rick', 'camila'];

*/