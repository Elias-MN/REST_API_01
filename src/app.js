const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Página de inicio");
});

app.get('/games', (req, res) => {
    res.send([
        {
            id: 1,
            nombre: 'Age of Empires'
        },
        {
            id: 2,
            nombre: 'Valorant'
        },
        {
            id: 3,
            nombre: 'Pokemon'
        },
        {
            id: 4,
            nombre: 'Minecraft'
        }
    ]);
});

module.exports = app;
