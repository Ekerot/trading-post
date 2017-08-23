var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    user: {type: Schema.Types.ObjectId, required: true},
    bookName: {type: string, required: true},
    author: {type: string, required: true},
    isbn: {type: string, required: true},
    publishYear: {type: string, required: true, ref: 'User'}
});

module.exports = mongoose.model('Book', schema);
