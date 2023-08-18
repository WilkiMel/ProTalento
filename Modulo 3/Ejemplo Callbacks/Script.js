function saludar(nombre){
    console.log(`Hola ${nombre}`);
}

function saludoAlien(nombre){
    console.log(`Blublublu ${nombre}`);
}

function saludarConEdad(nombre,edad,callback){
    const nombreConEdad = `${nombre} de ${edad} años`;
    callback(nombreConEdad);
}

saludarConEdad(`Willy`, 24, saludar);
saludarConEdad(`Willy`, 24, saludoAlien);
