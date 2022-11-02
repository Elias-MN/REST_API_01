const express = require('express');
const app = express();

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

const puerto = process.env.PORT || 5500;

app.listen(puerto, () => console.log(`Escuchando en el puerto ${puerto}`));
