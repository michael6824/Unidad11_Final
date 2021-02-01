const Sure = require('../Models/Sure');

function create(req, res) {
    var sure = new Sure();
    var params = req.body;
    sure.plate = params.plate;
    sure.status = params.status;
    sure.type = params.type;
    sure.description = params.description;
    sure.value = params.value;
    sure.date = params.date;

    sure.save((error, sureCreated) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        } else {
            if (!sureCreated) {
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al insertar el seguro"
                })
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "correcto",
                    dataUser: sureCreated
                })
            }
        }
    })
}

function update(req, res) {
    var parameters = req.body;
    var platen = req.params.plate;
    Sure.findOneAndUpdate({ plate: { $regex: platen } }, parameters, (error, sureUpdated) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        } else {
            if (!sureUpdated) {
                res.status(400).send({
                    message: "Error al actualizar el Seguro"
                })
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "Seguro actualizado",
                    dataUser: sureUpdated
                })
            }
        }
    })
}

function remove(req, res) {
    var platen = req.params.plate;

    Sure.findOneAndDelete({ plate: { $regex: platen } }, (error, sureRemoved) => {
        if (error) {
            res.status(500).send({
                statusCode: 400,
                message: "error al eliminar"
            })
        } else {
            res.status(200).send({
                statusCode: 200,
                message: "Seguro Eliminado"
            })
        }
    })
}

function getAllsures(req, res) {
    Sure.find({}, (error, allsures) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el Servidor"
            })
        } else {
            res.status(200).send({
                statusCode: 200,
                message: "Todos los vehiculos",
                allSures: allsures
            })
        }
    })
}
module.exports = {
    create,
    update,
    remove,
    getAllsures
}