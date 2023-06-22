/* Trabajo1 */

/* var numeroUsuario = parseInt(prompt("Vamos a ver cuantos numeros (multiplos de 5) hay hasta el numero que ud coloque\n Ingrese un número:"));
var i = 1;
while (i <= numeroUsuario) {
    if (i % 5 === 0) {
        console.log(i);
    }
    i++;
} */

/* Trabajo2 */

/* var numero1 = parseInt(prompt("Ingrese el primer número:"));
var numero2 = parseInt(prompt("Ingrese el segundo número:"));
var i = 1;
while (i <= 50) {
    if (i === numero1 || i === numero2) {
        console.log(i + " ¡Lotería!");
    } else {
        console.log(i);
    }
    i++;
} */

/* Trabajo3 */

/* var arregloNumeros = [];
var numero1;
do {
    numero1 = parseInt(prompt("Ingrese un número (ingrese 0 para mostrar lo que guardo):"));
    if (numero1 !== 0) {
        arregloNumeros.push(numero1);
    }
} while (numero1 !== 0);

console.log("Números capturados:", arregloNumeros); */


/* Trabajo4 */

/* var arregloPalabras = [];
var palabra;
do {
    palabra = prompt("Ingrese una palabra (deje vacío para terminar):");
    if (palabra !== "") {
        arregloPalabras.push(palabra);
    }
} while (palabra !== "");

var resultado = arregloPalabras.join(" ");
console.log("Palabras capturadas:", resultado); */

/* Trabajo5 */

var dia;
do {
    dia = prompt("Ingrese un día de la semana (Ingrese 'domingo' para terminar):").toLowerCase();
    switch (dia) {
        case "lunes":
            alert("Es lunes, ánimo!");
            break;
        case "martes":
            alert("Es martes, sigue adelante!");
            break;
        case "miércoles":
            alert("Es miércoles, mitad de semana!");
            break;
        case "jueves":
            alert("Es jueves, casi llegamos!");
            break;
        case "viernes":
            alert("Es viernes, fin de semana cerca!");
            break;
        case "sábado":
            alert("Es sábado, a disfrutar!");
            break;
        case "domingo":
            alert("Ve a descansar");
            break;
        default:
            alert("Día no reconocido");
            break;
    }
} while (dia !== "domingo");