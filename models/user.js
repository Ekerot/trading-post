var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    firstName: {type: string, required: true},
    lastName: {type: string, required: true},
    password: {type: string, required: true},
    email: {type: string, required: true, unique: true},
    books: [{type: Schema.Types.ObjectId, ref: 'Book'}]
});

// Add mongoose unique validator package to be able to use the unique property
schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);