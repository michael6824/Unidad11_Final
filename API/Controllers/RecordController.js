const Record = require('../Models/History');

function create(req, res) {
    var record = new Record();
    var params = req.body;

    record.plate = params.plate;
    record.cc = params.cc;
    record.description = params.description;
    record.date = params.date;



    record.save((error, recordCreated) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        } else {
            if (!recordCreated) {
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al insertar el vehiculo"
                })
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "correcto",
                    dataUser: recordCreated
                })
            }
        }
    })
}

function update(req, res) {
    var parameters = req.body;
    var platen = req.params.plate;
    Record.findOneAndUpdate({ plate: { $regex: platen } }, parameters, (error, recordUpdated) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        } else {
            if (!recordUpdated) {
                res.status(400).send({
                    message: "Error al actualizar el usuario"
                })
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "Vehiculo actualizado",
                    dataUser: recordUpdated
                })
            }
        }
    })
}

function remove(req, res) {
    var platen = req.params.plate;

    Record.findOneAndDelete({ plate: { $regex: platen } }, (error, recordRemoved) => {
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

function getAllrecords(req, res) {
    Record.find({}, (error, allrecords) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el Servidor"
            })
        } else {
            res.status(200).send({
                statusCode: 200,
                message: "Todos los vehiculos",
                allUsers: allrecords
            })
        }
    })
}
module.exports = {
    create,
    update,
    remove,
    getAllrecords
}