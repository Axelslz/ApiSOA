const path = require('path');
const mysql = require('mysql');

// Obtener la ruta absoluta del archivo config.js
const configPath = path.resolve(__dirname, './database/config/config.js');
const { databaseConfig } = require(configPath);

const connection = mysql.createConnection(databaseConfig);

connection.connect((err) => {
    if (err) {
        console.error('Error al conectar con la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos');
    // Puedes realizar consultas u operaciones adicionales aquí si lo deseas
});

