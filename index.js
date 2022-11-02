const app = require("./src/app");
const puerto = process.env.PORT || 4000;

app.listen(puerto)
console.log(`Escuchando en el puerto ${puerto}`);
