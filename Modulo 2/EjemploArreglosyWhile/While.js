// Estructuras de control

// while
let gastos = 1000000;
let salario = 1160000; 
// 1160000 <= 1160000 => true
// 1160000 <= 1200000 => false

while (gastos < salario) {
    let comida = 40000;
    gastos = gastos + comida;
    // gastos += comida;
    //alert(`Uy, has gastado ${comida} en comida y ahora tu gastos son: ${gastos}`);
    if (gastos > 1100000 && gastos < 1150000) {
        //alert("Oye ya estás corto de dinero");
    }
}

gastos = 2000000;
salario = 1160000;

do {
    let comida = 40000;
    gastos = gastos + comida;
    // gastos += comida;
    //alert(`Uy, has gastado ${comida} en comida y ahora tu gastos son: ${gastos}`);
} while (gastos < salario);

const alumnosMali = ['Willinton','Laura','Jorge','Luis','Ricardo','Camila', 'Sandra', 'Moris'];

const alumnosAlfredo = [];

// index -> contador porque cuenta cuantas veces ejecutamos
//                          alumnosMali.length -> tamaño del arreglo llamada alumnosMali
for (let index = 0; index < alumnosMali.length; index++) {
    //                          siempre se hace el alumento 
    console.log(`Valor de index ${index}`);
    // acceder a la posición alumnosMali[0] en la primera iteración porque index -> 0
    // acceder a la posición alumnosMali[1] en la segunda iteración porque index -> 1
    // ...
    // element === 'Willinton' alumnosMali[0] en la primera iteración porque index -> 0
    // element === 'Laura' alumnosMali[1] en la segunda iteración porque index -> 0
    const element = alumnosMali[index];
    console.log(element);
    // push element => 'Willinton' alumnosMali[0] en la primera iteración porque index -> 0
    // push element => 'Laura' alumnosMali[1] en la segunda iteración porque index -> 1
    alumnosAlfredo.push(element);
}

console.log(alumnosAlfredo);