const express = require('express');
const UserController = require('../Controllers/UserController')
const VehicleController = require('../Controllers/VehicleController')
const FineControllers = require('../Controllers/FineControllers')
const SureController = require('../Controllers/SureController')
const ServicesController = require('../Controllers/ServicesController')
const RecordController = require('../Controllers/RecordController')


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
api.get('/usercheck/:email,:pass', UserController.checkpass)
    //Vehiculos
api.post('/vehicle', VehicleController.create);
api.put('/vehicle/:plate', VehicleController.update);
api.delete('/vehicle/:plate', VehicleController.remove);
api.get('/allvehicles', VehicleController.getAllvehicles);
api.get('/vehicle/:plate', VehicleController.getVehicle);
api.get('/Vehiclebyuser/:cc', VehicleController.getVehiclebyuser);
//Seguros
api.post('/ensurance', SureController.create);
api.put('/ensurance/:plate', SureController.update);
api.delete('/ensurance/:id', SureController.remove);
api.get('/allEnsurances', SureController.getAllsures);
api.get('/ensurance/:plate', SureController.getensurance);
//Multas
api.post('/fine', FineControllers.create);
api.put('/fine/:id', FineControllers.update);
api.delete('/fine/:idfind', FineControllers.remove);
api.get('/allfines', FineControllers.getAllfines)
api.get('/fine/:plate,:cc,:type', FineControllers.getFine);
//Historial
api.post('/record', RecordController.create);
api.put('/record/:id', RecordController.update);
api.delete('/record/:id', RecordController.remove);
api.get('/allrecords', RecordController.getAllrecords)
api.get('/record/:plate', RecordController.getrecord);
//Servicios
api.post('/services', ServicesController.create);
api.put('/services/:plate', ServicesController.update);
api.delete('/services/:plate', ServicesController.remove);
api.get('/allservices', ServicesController.getAllServices)

module.exports = api;