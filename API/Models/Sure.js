const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var SureSchema = new Schema({
    plate: String,
    status: Boolean,
    type: Boolean, //0: Soat, 1: Seguro Todo Riesgo
    description: String,
    value: Number,
    date: Date
});

module.exports = mongoose.model('Sure', SureSchema);