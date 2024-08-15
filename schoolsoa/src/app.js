// app.js
const express = require('express');
const { errorHandler, enableCors, requestLogger } = require('./middlewares/middleware');
const route = require('../src/routes/route');

const app = express();

// Middlewares
app.use(enableCors); // Habilitar CORS para todas las rutas
app.use(express.json()); // Parsear el cuerpo de las solicitudes como JSON
app.use(requestLogger); // Registrar todas las solicitudes

// Rutas
app.use(route); // Usar las rutas definidas en route.js

// Middleware para manejar errores
app.use(errorHandler);

// Puerto en el que se ejecutará el servidor
const port = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
