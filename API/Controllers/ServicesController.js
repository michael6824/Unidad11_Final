const { findByIdAndDelete } = require('../Models/Services');
const Services = require('../Models/Services');

function create(req, res) {
    var Services = new Services();
    var params = req.body;

    Services.type = params.type;
    Services.address = params.address;
    Services.description = params.description;
    Services.contact = params.contact;
    Services.phone = params.phone;
    Services.city = params.city;
    Services.departament = params.departament;
    Services.specialty = params.specialty;

    Services.save((error, ServicesCreated) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        } else {
            if (!ServicesCreated) {
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al insertar el vehiculo"
                })
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "correcto",
                    dataUser: ServicesCreated
                })
            }
        }
    })
}

function update(req, res) {
    var parameters = req.body;
    var platen = req.params.plate;
    Services.findOneAndUpdate({ plate: { $regex: platen } }, parameters, (error, ServicesUpdated) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        } else {
            if (!ServicesUpdated) {
                res.status(400).send({
                    message: "Error al actualizar el usuario"
                })
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "Vehiculo actualizado",
                    dataUser: ServicesUpdated
                })
            }
        }
    })
}

function remove(req, res) {
    var platen = req.params.id;

    Services.findByIdAndDelete({ platen }, (error, ServicesRemoved) => {
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

function getAllServices(req, res) {
    Services.find({}, (error, allServicess) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el Servidor"
            })
        } else {
            res.status(200).send({
                statusCode: 200,
                message: "Todos los vehiculos",
                allUsers: allServicess
            })
        }
    })
}
module.exports = {
    create,
    update,
    remove,
    getAllServices
}