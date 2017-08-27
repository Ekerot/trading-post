var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    publishYear: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, required: true, ref: 'User'}
});

module.exports = mongoose.model('Book', schema);
