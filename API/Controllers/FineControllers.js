const Fine = require('../Models/Fine');

function create(req, res) {
    var fine = new Fine();
    var params = req.body;

    fine.type = params.type;
    fine.cc = params.cc;
    fine.plate = params.plate;
    fine.description = params.description;
    fine.value = params.value;
    fine.date = params.date;

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
    var id1 = req.params.id;
    Fine.findByIdAndUpdate(id1, parameters, (error, fineUpdated) => {
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
    var id1 = req.params.idfind;
    console.log(id1)
    Fine.findByIdAndDelete(id1, (error, vehicleRemoved) => {
        console.log(vehicleRemoved)
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
    Fine.find({}, (error, allfines) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el Servidor"
            })
        } else {
            res.status(200).send({
                statusCode: 200,
                message: "Todos las multas",
                allfines: allfines

            })
        }
    })
}

function getFine(req, res) {
    if (req.params.type == "true") {
        var plate1 = req.params.plate;
        Fine.find({ plate: { $regex: plate1 } }, (error, foundvehicle) => {
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
    } else {
        var cc1 = req.params.cc;
        Fine.find({ cc: cc1 }, (error, foundvehicle) => {
            if (error) {

                res.status(500).send({
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
    var plate1 = req.params.plate;

}

module.exports = {
    create,
    update,
    remove,
    getAllfines,
    getFine
}