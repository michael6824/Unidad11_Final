const mongoose = require('mongoose');
const app = require('./app')
const port = 3000;

mongoose.connect('mongodb://localhost:27017/pits', { useNewUrlParser: true, useUnifiedTopology: true }, (error, res) => {
    if (error) {
        console.log("Error de Conexión", error);
    } else {
        console.log("Conexión Correcta");
        app.listen(port, () => {
            console.log('Escuchando el puerto')
        });
    }
})