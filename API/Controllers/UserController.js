const User = require('../Models/User');


function create(req, res) {
    var user = new User();
    var params = req.body;

    user.lastname = params.lastname;
    user.name = params.name;
    user.email = params.email;
    user.date = params.date;
    user.cc = params.cc;
    user.pass = params.pass;
    user.save((error, userCreated) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        } else {
            if (!userCreated) {
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al insertar el usuario"
                })
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "correcto",
                    dataUser: userCreated
                })
            }
        }
    })
}

function update(req, res) {
    var parameters = req.body;
    var idUser = req.params.iduser;

    User.findByIdAndUpdate(idUser, parameters, (error, userUpdated) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        } else {
            if (!userUpdated) {
                res.status(400).send({
                    message: "Error al actualizar el usuario"
                })
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "usuario actualizado",
                    dataUser: userUpdated
                })
            }
        }
    })
}

function remove(req, res) {
    var idUser = req.params.iduser;

    User.findByIdAndDelete(idUser, (error, userRemoved) => {
        if (error) {
            res.status(500).send({
                statusCode: 400,
                message: "error al eliminar"
            })
        } else {
            res.status(200).send({
                statusCode: 200,
                message: "Usuario Eliminado"
            })
        }
    })
}

function getAllUsers(req, res) {
    User.find({}, (error, allUsers) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el Servidor"
            })
        } else {
            res.status(200).send({
                statusCode: 200,
                message: "Todos los usuarios",
                allUsers: allUsers
            })
        }
    })
}

function getUser(req, res) {
    var email1 = req.params.email;
    User.find({ email: { $regex: email1 } }, (error, allUsers) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el Servidor"
            })
        } else {
            res.status(200).send({
                statusCode: 200,
                message: "Usuario correcto",
                allUsers: allUsers
            })
        }
    })
}

function checkpass(req, res) {
    var email1 = req.params.email;
    var pass1 = req.params.pass;
    User.find({ email: { $regex: email1 }, pass: { $regex: pass1 } }, (error, allUsers) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el Servidor"
            })
        } else {

            if (allUsers.length > 0) {
                res.status(200).send({
                    statusCode: 200,
                    message: "Usuario ok",
                    correct: true,
                    user: allUsers
                })
            } else {
                res.status(200).send({
                    statusCode: 400,
                    message: "Usuario nok",
                    correct: false
                })
            }




        }
    })
}

module.exports = {
    create,
    update,
    remove,
    getAllUsers,
    getUser,
    checkpass
}