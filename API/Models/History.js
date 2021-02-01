const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var RecordSchema = new Schema({
    plate: String,
    cc: Number,
    description: String,
    date: Date
});

module.exports = mongoose.model('Record', RecordSchema);