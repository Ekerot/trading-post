var express = require('express');
var router = express.Router();

var Book = require('../models/book')

// Post to database. Add to the book model reaching the frontend via req.body
router.post('/', function (req, res, next) {
    var book = new Book({
        title:  req.body.title,
        author: req.body.author,
        publishYear: req.body.publishYear,
        description: req.body.description,
        price: req.body.price
    });
    message.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved book',
            obj: result
        })
    });
});

module.exports = router;
