const express = require('express');
const UserController = require('../Controllers/UserController')
const VehicleController = require('../Controllers/VehicleController')
const api = express.Router();

api.get('/saludar', (req, res) => {
    console.log('llegó a la ruta saludar...');
});
//Usuarios
api.post('/user', UserController.create);
api.put('/user/:iduser', UserController.update);
api.delete('/user/:iduser', UserController.remove);
api.get('/allUsers', UserController.getAllUsers)
api.get('/user/:email', UserController.getUser)
    //Vehiculos
api.post('/vehicle', VehicleController.create);
api.put('/vehicle/:plate', VehicleController.update);
api.delete('/vehicle/:plate', VehicleController.remove);
api.get('/allvehicles', VehicleController.getAllvehicles)
    //Seguros
api.post('/sure', VehicleController.create);
api.put('/sure/:plate', VehicleController.update);
api.delete('/sure/:plate', VehicleController.remove);
api.get('/allsures', VehicleController.getAllvehicles)
    //Multas
api.post('/fine', VehicleController.create);
api.put('/fine/:plate', VehicleController.update);
api.delete('/fine/:plate', VehicleController.remove);
api.get('/allfine', VehicleController.getAllvehicles)
    //Historial
api.post('/record', VehicleController.create);
api.put('/record/:plate', VehicleController.update);
api.delete('/record/:plate', VehicleController.remove);
api.get('/allrecords', VehicleController.getAllvehicles)
    //Servicios
api.post('/services', VehicleController.create);
api.put('/services/:plate', VehicleController.update);
api.delete('/services/:plate', VehicleController.remove);
api.get('/allservices', VehicleController.getAllvehicles)

module.exports = api;