// Requires: importación de librerías para que funcionen cosas
var express = require('express');
var mongoose = require('mongoose');

// Inicialización de variables
var app = express();

// Conexión a la BBDD con Mongoose
mongoose.connection.openUri('mongodb://localhost:27017/soccerpro', (err, res) => {
    if (err) {
        throw err; // Detiene el proceso, muestra el error por consola y no hace nada más
    }
    console.log('BBDD works!');
});

// Escuchando peticiones
app.listen(3000, () => {
    console.log('server works!');
});

// Rutas
app.get('/', (request, response, next) => {
    response.status(200).json({
        verified: true,
        message: 'message'
    });
});
