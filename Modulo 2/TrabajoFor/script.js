// Ejercicio 1
function imprimirImpares() {
    console.log("Números impares del 1 al 50:");
    for (let i = 1; i <= 50; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

// Ejercicio 2
var pokemons = [
    'bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon',
    'charizard', 'squirtle', 'wartortle', 'blastoise', 'caterpie',
    'metapod', 'butterfree', 'weedle', 'kakuna', 'beedrill', 'pidgey',
    'pidgeotto', 'pidgeot', 'rattata', 'raticate', 'spearow', 'fearow',
    'ekans', 'arbok', 'pikachu', 'raichu', 'sandshrew', 'sandslash',
    'nidoran-f', 'nidorina', 'nidoqueen', 'nidoran-m', 'nidorino',
    'nidoking', 'clefairy', 'clefable', 'vulpix', 'ninetales',
    'jigglypuff', 'wigglytuff', 'zubat', 'golbat', 'oddish', 'gloom',
    'vileplume', 'paras', 'parasect', 'venonat', 'venomoth', 'diglett',
    'dugtrio', 'meowth', 'persian', 'psyduck', 'golduck', 'mankey',
    'primeape', 'growlithe', 'arcanine', 'poliwag', 'poliwhirl',
    'poliwrath', 'abra', 'kadabra', 'alakazam', 'machop', 'machoke',
    'machamp', 'bellsprout', 'weepinbell', 'victreebel', 'tentacool',
    'tentacruel', 'geodude', 'graveler', 'golem', 'ponyta', 'rapidash',
    'slowpoke', 'slowbro', 'magnemite', 'magneton', 'farfetchd', 'doduo',
    'dodrio', 'seel', 'dewgong', 'grimer', 'muk', 'shellder', 'cloyster',
    'gastly', 'haunter', 'gengar', 'onix', 'drowzee', 'hypno', 'krabby',
    'kingler', 'voltorb'
];

function mostrarNombresPokemon() {
    var numeroUsuario = parseInt(document.getElementById("numeroUsuario").value);

    console.log(`Nombres de los Pokémon cuyos números son múltiplos de 5 hasta ${numeroUsuario}:`);
    for (let i = 1; i <= numeroUsuario; i++) {
        if (i % 5 === 0) {
            var pokemon = pokemons[i - 1];
            if (pokemon) {
                console.log(pokemon);
            }
        }
    }
}

// Ejercicio 3
var arreglo = [4, "dos", 8, "tres", 5, 9, 1, "cero"];

function mostrarElementosNumericos() {
    console.log("Elementos numéricos del arreglo:");
    for (let i = 0; i < arreglo.length; i++) {
        if (typeof arreglo[i] === "number") {
            console.log(arreglo[i]);
        }
    }
}