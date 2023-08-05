const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');

app.use(express.json());

//Punto1
app.get('/api', (req, res) => {
    res.status(200)
    res.send({
        mensaje: "hola mundo"
    });
});

//Punto2
app.get('/api/suma', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const resultado = num1 + num2;

    res.status(200).json({ resultado });
});

//Punto3
app.get('/api/usuario/:nombre', (req, res) => {
    const nombreUsuario = req.params.nombre;
    res.status(200).json({ usuario: nombreUsuario });
});

//Punto4
app.get('/api/swapi/:numeropersonaje', async (req, res) => {
    const numeropersonaje = req.params.numeropersonaje;

    try {
        const response = await axios.get(`https://swapi.dev/api/people/${numeropersonaje}`);
        const personaje = response.data;
        res.status(200).json({ personaje });
    }
    catch (error) {
        res.status(404).json({ error: 'personaje no encontrado' });
    }
});

//Punto5
app.put('/api/body', (req, res) => {
    const requestBody = req.body;
    res.status(200).json(requestBody);
});

//Punto6
app.post('/api/suma', (req, res) => {
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);
    const resultado = num1 + num2;
    res.status(200).json({ resultado });
});

//Punto7
app.delete('/api/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id === 3) {
        res.status(200).json({ mensaje: `Se ha eliminado el objeto con ID ${id}` });
    } else {
        res.status(404).json({ mensaje: `No se encontró el objeto con el ID especificado` });
    }
});

app.use('/alumnos', AlumnoRoutes);


app.listen(port, () => {
    console.log(`Aplicación escuchando en el puerto ${port}`);
});