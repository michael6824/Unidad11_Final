const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useFindAndModify', false);
var UserSchema = new Schema({
    name: String,
    lastname: String,
    cc: Number,
    date: String,
    email: String,
    img: { data: Buffer, contentType: String }
});


module.exports = mongoose.model('User', UserSchema);