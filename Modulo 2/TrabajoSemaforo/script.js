const semaforoImg = document.querySelector('#semaforo-img');
let color = 'ROJO';

setInterval(() => {
    if (color === 'ROJO') {
        color = 'AMARILLO';
        alert('El semáforo cambió a AMARILLO');
        document.getElementById("img1").src="Amarillo.jpg";
    } else if (color === 'AMARILLO') {
        color = 'VERDE';
        alert('El semáforo cambió a VERDE');
        document.getElementById("img1").src="Verde.jpg";
    } else {
        color = 'ROJO';
        alert('El semáforo cambió a ROJO');
        document.getElementById("img1").src="Rojo.jpg";
    }
}, 3500);