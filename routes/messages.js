/**
 * Created by Maia on 12/13/2016.
 */
var express = require('express');
var router = express.Router();
var User = require('../models/user')
router.get('/', function (req, res, next) {
    res.render('index');
});

module.exports = router;
