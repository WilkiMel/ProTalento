/* alert("HOla Willl") */

console.log(h1Titulo);

let body = document.getElementsByName("body")

function mostrarMensaje() {
    /* alert("Botón Presionado"); */
    let h1Titulo = document.getElementById("miTitulo");
    h1Titulo.innerHTML = "Texto Modificado";
    h1Titulo.setAttribute("class", "textoVerde");
}

function crearImagen() {
    let divPadre = document.getElementById("contenedorDeImagenes");
    let nuevoNodoImagen = document.createElement("img");
    nuevoNodoImagen.setAttribute("src", "img/Foda.jpg");
    divPadre.appendChild(nuevoNodoImagen);
}

function eliminarElemento(){
    let imagenes = document.getElementsByTagName("img");
    console.log(imagenes);
    let numeroImagenes = imagenes.length;
    for(let i=0; i < numeroImagenes; i++){
        imagenes[0].remove();
    }
}

console.log("")