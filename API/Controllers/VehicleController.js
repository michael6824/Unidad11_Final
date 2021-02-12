const Vehicle = require('../Models/Vehicle');

function create(req, res) {
    var vehicle = new Vehicle();
    var params = req.body;

    vehicle.cc = params.cc;
    vehicle.name = params.name;
    vehicle.plate = params.plate;
    vehicle.brand = params.brand;
    console.log(vehicle)
    vehicle.save((error, vehicleCreated) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        } else {
            if (!vehicleCreated) {
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al insertar el vehiculo"
                })
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "correcto",
                    dataUser: vehicleCreated
                })
            }
        }
    })
}

function update(req, res) {
    var parameters = req.body;
    var platen = req.params.plate;
    Vehicle.findOneAndUpdate({ plate: { $regex: platen } }, parameters, (error, vehicleUpdated) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        } else {
            if (!vehicleUpdated) {
                res.status(400).send({
                    message: "Error al actualizar el usuario"
                })
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "Vehiculo actualizado",
                    dataUser: vehicleUpdated
                })
            }
        }
    })
}

function remove(req, res) {
    var platen = req.params.plate;

    Vehicle.findOneAndDelete({ plate: { $regex: platen } }, (error, vehicleRemoved) => {
        if (error) {
            res.status(500).send({
                statusCode: 400,
                message: "error al eliminar"
            })
        } else {
            res.status(200).send({
                statusCode: 200,
                message: "Vehiculo Eliminado"
            })
        }
    })
}

function getAllvehicles(req, res) {
    Vehicle.find({}, (error, allvehicles) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el Servidor"
            })
        } else {
            res.status(200).send({
                statusCode: 200,
                message: "Todos los vehiculos",
                allUsers: allvehicles
            })
        }
    })
}

function getVehicle(req, res) {
    var plate1 = req.params.plate;
    Vehicle.find({ plate: { $regex: plate1 } }, (error, foundvehicle) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el Servidor"
            })
        } else {
            res.status(200).send({
                statusCode: 200,
                message: "Vehiculo correcto",
                foundvehicle: foundvehicle
            })
        }
    })
}

function getVehiclebyuser(req, res) {
    var plate1 = req.params.cc;
    Vehicle.find({ cc: plate1 }, (error, foundvehicle) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el Servidor"
            })
        } else {
            res.status(200).send({
                statusCode: 200,
                message: "Vehiculo correcto",
                foundvehicle: foundvehicle
            })
        }
    })
}
module.exports = {
    create,
    update,
    remove,
    getAllvehicles,
    getVehicle,
    getVehiclebyuser
}