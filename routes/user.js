/**
 * Created by Maia on 12/13/2016.
 */
var express = require('express');
var bcryptjs = require('bcryptjs');
var jwt = require('jsonwebtoken');
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
router.post('/signin', function (req, res, next) {
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            return res.status(500).json({
                title: 'Something went wrong...',
                error: err
            });
        }
        if(!user){
            return res.status(401).json({
                title: 'Login failed',
                error: {
                    message: 'Invalid login credentials.'
                }
            });
        }
        if(!bcryptjs.compareSync(req.body.password,user.password)){
            return res.status(401).json({
                title: 'Login failed',
                error: {
                    message: 'Invalid login credentials.'
                }
            });
        }
        var token = jwt.sign({user:user},'shhhh!!',{expiresIn:7200});
        res.status(200).json({
            message: 'Successfully logged in.',
            token: token,
            userId: user._id
        });
    });
});
module.exports = router;