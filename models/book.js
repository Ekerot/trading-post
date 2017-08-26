var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: {type: string, required: true},
    author: {type: string, required: true},
    publishYear: {type: string, required: true},
    description: {type: string, required: true},
    price: {type: string, required: true},
    user: {type: Schema.Types.ObjectId, required: true, ref: 'User'}
});

module.exports = mongoose.model('Book', schema);
