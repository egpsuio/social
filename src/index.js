const express = require('express');

const config = require('./server/config');

// Conexión a la base de datos
require('./database');

const app = config(express());

// Inicializando el servidor
app.listen(app.get('port'),() => {
    console.log('Servidor en puerto', app.get('port'));
});
    