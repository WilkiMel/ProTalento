
/* Punto 1 */

/* let cualidad = prompt("¿Eres bellisimo/a?");

if (cualidad == "Si" || cualidad == "si") {
    alert("Ciertamente :D")
} else if (cualidad == "No" || cualidad == "no") {
    alert("No te creo :o")
} else {
    alert("Solo puedes responder con Si o No")
} */

/* Punto 2 */

/* let numDivisible = parseInt(prompt("Dame un numero y te dire si se puede dividir en 2 o no :D"));

numDividido = (numDivisible/2);


if (numDividido % 1 == 0){
    alert("Este numero es divisible por 2 y el resultado es: " + numDividido)
} else{
    alert("Este numero no es divisible por 2 y el resultado es un decimal: " + numDividido)
}
     */
/* Punto 3 */

/* let numPar = parseInt(prompt("Dame un numero y te dire si es par o no :D"));

numRevisado = (numPar/2);


if (numRevisado % 1 == 0){
    alert("Este numero es par");
} else{
    alert("Este numero es impar");
} */

/* Punto 4 */

/* let numCliente = parseInt(prompt("Bienvenido a la loteria FS...Dame un numero y te digo si ganaste el premio mayor :D :D :D"));


if(numCliente === 1000 ){
    alert("Te ganaste un premio <|:)")
} else{
    alert("Lo sentimos, sigue participando")
} */

/* Punto 5 */

/* alert("Dame 2 numeros y te dire cual es menor")

let numero1 = parseInt(prompt("Numero 1"));

let numero2 = parseInt(prompt("Numero 2"));

if (numero1 < numero2) {
    alert("El numero menor es: " + numero1)
} else if (numero1 == numero2) {
    alert("Los numeros son iguales")
} else {
    alert("El numero menos es: " + numero2)
} */

/* Punto 6 */

/* alert("Dame 3 numeros y te dire cual es menor")

let numeroUno = parseInt(prompt("Numero 1"));

let numeroDos = parseInt(prompt("Numero 2"));

let numeroTres = parseInt(prompt("Numero 3"));

if (numeroUno == numeroDos && numeroUno == numeroTres) {
    alert("Numero 1, Numero 2 y Numero 3 son iguales!: " + numeroUno + "");
}
else {

    if (numeroUno > numeroDos) {
        if (numeroUno > numeroTres) {
            alert("Numero 1 es mayor: " + numeroUno);
        }
        else {
            alert("Numero 3 es mayor: " + numeroTres);
        }
    }
    else {
        if (numeroUno < numeroDos) {
            if (numeroDos > numeroTres) {
                alert("Numero 2 es mayor: " + numeroDos);
            }
            else {
                alert("Numero 3 es mayor: " + numeroTres);
            }
        }
    }
} */


/* Punto 7 */

/* let diaSemana = parseInt(prompt("Dame un numero del 1 al 7 y te dire el día de la semana que le corresponde..."));

if (diaSemana == 1) {
    alert("Feliz Lunes")
} else if (diaSemana == 2) {
    alert("Feliz Martes")
} else if (diaSemana == 3) {
    alert("Feliz Miercoles")
} else if (diaSemana == 4) {
    alert("Feliz Jueves")
} else if (diaSemana == 5) {
    alert("Feliz Viernes")
} else if (diaSemana == 6) {
    alert("Feliz Sábado")
} else if (diaSemana == 7) {
    alert("Feliz Domingo")
} else{
    alert("El numero no corresponde a un día de la semana")
} */

/* Punto 8 */

/* let notaFinal = parseInt(prompt("Dime cuanto te sacaste en el examen y dire como te fue..."));


if (notaFinal <= 5){
    alert("Reprobaste :_(")
}else if (notaFinal <= 8){
    alert("Te fue regular :/")
}else if (notaFinal <= 9){
    alert("Te fue bien :)")
}else if (notaFinal == 10){
    alert("Te fue excelente :D")
}else {
    alert("Error #$(&#&/#$  La nota no es valida")
} */

/* Punto 9 */

/* alert("Hola, bienvenido a la heladeria FS...¿Que desea comprar?")

let seleccion1 = prompt("A continuación veras los precios: \n\nHelado sin topping = 50 MXN \nTopping de Oreo = 10 MXN \nTopping de KitKat = 15 MXN \nTopping de brownie = 20 MXN \n\n¿Deseas agregarle algún sabor a tu helado o lo deseas sin topping?");

let heladoSinTopping = 50;
let heladoConOreo = 60;
let heladoConKitKat = 65;
let heladoConBrownie = 70;

if (seleccion1 == "No" || seleccion1 == "no") {
    alert("Serian solo 50 MXN")
} else if (seleccion1 == "Si" || seleccion1 == "si") {
    let topping1 = prompt("¿Que topping desea agregar? \nOreo \nKitKat \nBrownie")
    if (topping1 == "oreo" || topping1 == "Oreo") {
        alert("Seria solo " + heladoConOreo + " MXN")
    } else if (topping1 == "KitKat" || topping1 == "kitkat") {
        alert("Seria solo " + heladoConKitKat + " MXN")
    } else if (topping1 == "Brownie" || topping1 == "brownie") {
        alert("Seria solo " + heladoConBrownie + " MXN")
    } else {
        alert("Lo sentimos, este topping no lo tenemos ;/")
    }
} */

/* Punto 10 */

/* alert("Bienvenido a la Universidad SF, vamos a cotizar un programa educativo");

let programa = prompt("Que programa desea cotizar\n Course= $4999MXN\n Carrera= $3999MXN\n Master= $2999MXN\n").toUpperCase();

function restar(res1, res2){
    let resultado;
    resultado = res1 - res2;
    return resultado;
}

function sumar(sum1, sum2){
    let resultado;
    resultado = sum1 + sum2;
    return resultado;
}

function multiplicar(mul1, mul2){
    let resultado;
    resultado = mul1 * mul2;
    return resultado;
}

let costoCourse = multiplicar(2, 4999);
let costoCarrera = multiplicar(6, 3999);
let costoMaster = multiplicar(12, 2999);
let becaFacebook = 0.20;
let becaGoogle = 0.20;
let becaJesua = 0.50;

if (programa == "COURSE") {
    let descuento1 = prompt("¿Estas acogido a alguna de estas becas?\n Beca Facebook: 20% de descuento\n Beca Google: 15% de descuento\n Beca Jesua: 50% de descuento").toUpperCase();
    if (descuento1 == "FACEBOOK" || descuento1 == "BECA FACEBOOK") {
        alert("El course tiene una duración de 2 meses y con este descuento tiene un costo total de: " + restar(costoCourse, multiplicar (costoCourse, becaFacebook)));
    }else if (descuento1 == "GOOGLE" || descuento1 == "BECA GOOGLE"){
        alert("El course tiene una duración de 2 meses y con este descuento tiene un costo total de: " + restar(costoCourse, multiplicar (costoCourse, becaGoogle)));
    }else if (descuento1 == "JESUA" || descuento1 == "BECA JESUA"){
        alert("El course tiene una duración de 2 meses y con este descuento tiene un costo total de: " + restar(costoCourse, multiplicar (costoCourse, becaJesua)));
    }else{
        alert("Esa opción no es valida");
    }
}else if(programa == "CARRERA"){
    let descuento2 = prompt("¿Estas acogido a alguna de estas becas?\n Beca Facebook: 20% de descuento\n Beca Google: 15% de descuento\n Beca Jesua: 50% de descuento").toUpperCase();
    if (descuento2 == "FACEBOOK" || descuento2 == "BECA FACEBOOK") {
        alert("La carrera tiene una duración de 6 meses y con este descuento tiene un costo total de: " + restar(costoCarrera, multiplicar (costoCarrera, becaFacebook)));
    }else if(descuento2 == "GOOGLE" || descuento2 == "BECA GOOGLE"){
        alert("La carrera tiene una duración de 6 meses y con este descuento tiene un costo total de: " + restar(costoCarrera, multiplicar (costoCarrera, becaGoogle)));
    }else if(descuento2 == "JESUA" || descuento2 == "BECA JESUA"){
        alert("La carrera tiene una duración de 6 meses y con este descuento tiene un costo total de: " + restar(costoCarrera, multiplicar (costoCarrera, becaJesua)));
    }else{
        alert("Esa opción no es valida");
    }
}else if(programa == "MASTER"){
    let descuento3 = prompt("¿Estas acogido a alguna de estas becas?\n Beca Facebook: 20% de descuento\n Beca Google: 15% de descuento\n Beca Jesua: 50% de descuento").toUpperCase();
    if (descuento3 == "FACEBOOK" || descuento3 == "BECA FACEBOOK") {
        alert("El Master tiene una duración de 12 meses y con este descuento tiene un costo total de: " + restar(costoMaster, multiplicar (costoMaster, becaFacebook)));
    }else if(descuento3 == "GOOGLE" || descuento3 == "BECA GOOGLE") {
        alert("El Master tiene una duración de 12 meses y con este descuento tiene un costo total de: " + restar(costoMaster, multiplicar (costoMaster, becaGoogle)));
    }else if(descuento3 == "JESUA" || descuento3 == "BECA JESUA"){
        alert("El Master tiene una duración de 12 meses y con este descuento tiene un costo total de: " + restar(costoMaster, multiplicar (costoMaster, becaJesua)));
    }else{
        alert("Esa opción no es valida");
    }
}else{
    alert("Esa opción no es valida");
} */

/* Punto 11 */

alert("Vamos a calcular cuanta gasolina gastas por recorrido");

let vehiculo = prompt("¿Que tipo de vehiculo tienes?\n Coche= 0.20 por km\n Moto= 0.10 por Km\n Autobus= 0.05 por Km\n").toUpperCase();

function restar(res1, res2) {
    let resultado;
    resultado = res1 - res2;
    return resultado;
}

function sumar(sum1, sum2) {
    let resultado;
    resultado = sum1 + sum2;
    return resultado;
}

function multiplicar(mul1, mul2) {
    let resultado;
    resultado = mul1 * mul2;
    return resultado;
}

let costoCoche = 0.20;
let costoMoto = 0.10;
let costoAutobus = 0.5;
let litrosConsumidos1 = 5;
let litrosConsumidos2 = 10;

if (vehiculo == "COCHE") {
    let recorrido1 = parseInt(prompt("¿Cuanta distancia recorrio?\n Coloque el dato en numeros"));
    if (recorrido1 <= 100) {
        alert("El costo total de la gasolina fue= " + sumar(multiplicar(costoCoche, recorrido1), litrosConsumidos1));
    } else if (recorrido1 > 100) {
        alert("El costo total de la gasolina fue= " + sumar(multiplicar(costoCoche, recorrido1), litrosConsumidos2));
    } else {
        alert("Por favor, digita un numero")
    }
} else if (vehiculo == "MOTO") {
    let recorrido1 = parseInt(prompt("¿Cuanta distancia recorrio?\n Coloque el dato en numeros"));
    if (recorrido1 <= 100) {
        alert("El costo total de la gasolina fue= " + sumar(multiplicar(costoMoto, recorrido1), litrosConsumidos1));
    } else if (recorrido1 > 100) {
        alert("El costo total de la gasolina fue= " + sumar(multiplicar(costoMoto, recorrido1), litrosConsumidos2));
    } else {
        alert("Por favor, digita un numero")
    }
} else if (vehiculo == "AUTOBUS") {
    let recorrido1 = parseInt(prompt("¿Cuanta distancia recorrio?\n Coloque el dato en numeros"));
    if (recorrido1 <= 100) {
        alert("El costo total de la gasolina fue= " + sumar(multiplicar(costoAutobus, recorrido1), litrosConsumidos1));
    } else if (recorrido1 > 100) {
        alert("El costo total de la gasolina fue= " + sumar(multiplicar(costoAutobus, recorrido1), litrosConsumidos2));
    } else {
        alert("Por favor, digita un numero");
    }
}
