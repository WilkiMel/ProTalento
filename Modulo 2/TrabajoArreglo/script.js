
var numerosAleatorios = [];
for (var i = 0; i < 10; i++) {
    var numero = Math.floor(Math.random() * 1000);
}
console.log("Array de números aleatorios:", numerosAleatorios);

var stringUsuario = prompt("Ingrese una serie de números separados por coma:");
var arrayUsuario = stringUsuario.split(",");
console.log("Array generado a partir del string:", arrayUsuario);

var arreglo1 = [10, 40, 30, 20, 15, 5];
var arregloOrdenado = arreglo1.sort(function (a, b) {
    return a - b;
});
var numeroMenor = arregloOrdenado[0];
var numeroMayor = arregloOrdenado[arregloOrdenado.length - 1];
console.log("Arreglo ordenado de menor a mayor:", arregloOrdenado);
console.log("Número menor:", numeroMenor);
console.log("Número mayor:", numeroMayor);