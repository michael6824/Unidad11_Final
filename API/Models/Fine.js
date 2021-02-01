const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var FineSchema = new Schema({
    type: Boolean, //0: id y 1: plate
    cc: Number,
    plate: String,
    description: String,
    value: Number,
    date: Date
});

module.exports = mongoose.model('Fine', FineSchema);