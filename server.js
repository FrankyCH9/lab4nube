const express = require('express');

//Create an app
const app = express();

// Route for clients
app.get('/clientes', (req, res) => {
    res.send('Ruta de clientes');
});

// Route for products
app.get('/productos', (req, res) => {
    res.send('Ruta de productos')
    res.send('Arroz')
    res.send('FIdeos')
    res.send('Aceite');
});

// Default route
app.get('/', (req, res) => {
    res.send('Hello world - Aldo Franky\n');
});

// Listen on port 9000
const PORT = 9000;
app.listen(PORT);
console.log(`Estamos usando el puerto ${PORT}`);