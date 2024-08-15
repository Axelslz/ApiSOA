const express = require('express');

// Middleware para manejar errores
function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Error en el servidor');
}

// Middleware para habilitar CORS
function enableCors(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
}

// Middleware para registrar solicitudes
function requestLogger(req, res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
}

module.exports = {
    errorHandler,
    enableCors,
    requestLogger
};