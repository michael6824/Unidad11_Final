const Fine = require('../Models/Fine');

function create(req, res) {
    var fine = new Fine();
    var params = req.body;

    fine.type = fine.type;
    fine.cc = fine.cc;
    fine.plate = fine.plate;
    fine.description = fine.description;
    fine.value = fine.value;
    fine.date = fine.date;

    fine.save((error, fineCreated) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        } else {
            if (!fineCreated) {
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al insertar la Multa"
                })
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "correcto",
                    dataUser: fineCreated
                })
            }
        }
    })
}

function update(req, res) {
    var parameters = req.body;
    var platen = req.params.plate;
    Fine.findOneAndUpdate({ plate: { $regex: platen } }, parameters, (error, fineUpdated) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        } else {
            if (!fineUpdated) {
                res.status(400).send({
                    message: "Error al actualizar la multa"
                })
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "Multa actualizada",
                    dataUser: fineUpdated
                })
            }
        }
    })
}

function remove(req, res) {
    var platen = req.params.plate;

    Fine.findOneAndDelete({ plate: { $regex: platen } }, (error, vehicleRemoved) => {
        if (error) {
            res.status(500).send({
                statusCode: 400,
                message: "error al eliminar"
            })
        } else {
            res.status(200).send({
                statusCode: 200,
                message: "Multa Eliminada"
            })
        }
    })
}

function getAllfines(req, res) {
    Fines.find({}, (error, allfines) => {
                if (error) {
                    res.status(500).send({
                        statusCode: 500,
                        message: "Error en el Servidor"
                    })
                } else {
                    res.status(200).send({
                            statusCode: 200,
                            message: "Todos las multas",
                            allUsers: allfines
                        }
                    })
            }
            module.exports = {
                create,
                update,
                remove,
                getAllfines
            }