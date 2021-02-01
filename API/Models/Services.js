const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useFindAndModify', false);
var SpareSchema = new Schema({
    type: {
        contentType: String,
        required: ["Repuesto", "Taller", "Ambos"],
    },
    address: String,
    description: String,
    contact: String,
    phone: Number,
    city: String,
    departament: String,
    specialty: Number // 0. baterias, 1 frenos, 2 aceite, 3 correas, 4 amortiguadores, 5 alineacion, 6 motor, 7 revision, 8 sincronizacion
});

module.exports = mongoose.model('Spare', SpareSchema);