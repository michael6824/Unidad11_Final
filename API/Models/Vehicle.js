const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useFindAndModify', false);

var VehicleSchema = new Schema({
    cc: Number,
    name: String,
    plate: String,
    brand: String,
});

module.exports = mongoose.model('Vehicle', VehicleSchema);