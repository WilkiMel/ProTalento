// Ejercicio 1
function mensajeConsola(callback) {
    callback("Este es un mensaje en la consola.");
}

mensajeConsola(console.warn); 

// Ejercicio 2
function argumento1(value, callback) {
    const dataType = typeof value;
    callback(`El tipo de dato es ${dataType}, y el contenido es ${value}`);
}

argumento1(42, console.log);

// Ejercicio 3
function operacionNumeros(num1, num2, callback) {
    callback(num1, num2);
}

function sumar(a, b) {
    console.log("Suma:", a + b);
}

function restar(a, b) {
    console.log("Resta:", a - b);
}

function multiplicar(a, b) {
    console.log("Multiplicación:", a * b);
}

function dividir(a, b) {
    console.log("División:", a / b);
}

operacionNumeros(20, 10, sumar);
operacionNumeros(20, 10, restar);
operacionNumeros(20, 10, multiplicar);
operacionNumeros(20, 10, dividir);

// Ejercicio 4
function cadena1(inputString, callback) {
    callback(inputString);
}

function pasarMinuscula(str) {
    console.log(str.toLowerCase());
}

function pasarMayuscula(str) {
    console.log(str.toUpperCase());
}

cadena1("PejeLagarto", pasarMinuscula);
cadena1("PejeLagarto", pasarMayuscula);

// Ejercicio 5
function filtrarMayorDosHoras(times, callback) {
    const filtroTiempo = times.filter(timeInMinutes => timeInMinutes > 120);
    callback(filtroTiempo);
}

const timeArray = [120, 80, 200, 100];
filtrarMayorDosHoras(timeArray, console.log);