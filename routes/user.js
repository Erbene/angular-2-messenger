/**
 * Created by Maia on 12/13/2016.
 */
var express = require('express');
var bcryptjs = require('bcryptjs');
var router = express.Router();
var User = require('../models/user');

router.post('/', function (req, res, next) {
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: bcryptjs.hashSync(req.body.password, 10),
        email: req.body.email
    });
    user.save(function(err, newUser){
        if(err){
            return res.status(500).json({
                title: 'Something went wrong...',
                error: err
            });
        }
        res.status(201).json({
            message: 'User saved',
            obj: newUser
        });
    });
});
module.exports = router;