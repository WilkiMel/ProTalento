function transferir1(){
    var cantidadT = parseInt(document.getElementById('cant').value);
    var cantidad1 = parseInt(document.getElementById('c1').value);
    var cantidad2 = parseInt(document.getElementById('c2').value);
    document.getElementById('c1').value = (cantidad1 - cantidadT);
    document.getElementById('c2').value = (cantidad2 + cantidadT);
}

function transferir2(){
    var cantidadT = parseInt(document.getElementById('cant').value);
    var cantidad1 = parseInt(document.getElementById('c1').value);
    var cantidad2 = parseInt(document.getElementById('c2').value);
    document.getElementById('c1').value = (cantidad1 + cantidadT);
    document.getElementById('c2').value = (cantidad2 - cantidadT);
}

function depositar1(){
    var cantidadT = parseInt(document.getElementById('cant').value);
    var cantidad1 = parseInt(document.getElementById('c1').value);
    var cantidad2 = parseInt(document.getElementById('c2').value);
    document.getElementById('c1').value = (cantidad1 + cantidadT);
}

function depositar2(){
    var cantidadT = parseInt(document.getElementById('cant').value);
    var cantidad1 = parseInt(document.getElementById('c1').value);
    var cantidad2 = parseInt(document.getElementById('c2').value);
    document.getElementById('c2').value = (cantidad2 + cantidadT);
}

function retirar1(){
    var cantidadT = parseInt(document.getElementById('cant').value);
    var cantidad1 = parseInt(document.getElementById('c1').value);
    var cantidad2 = parseInt(document.getElementById('c2').value);
    document.getElementById('c1').value = (cantidad1 - cantidadT);
}

function retirar2(){
    var cantidadT = parseInt(document.getElementById('cant').value);
    var cantidad1 = parseInt(document.getElementById('c1').value);
    var cantidad2 = parseInt(document.getElementById('c2').value);
    document.getElementById('c2').value = (cantidad2 - cantidadT);
}