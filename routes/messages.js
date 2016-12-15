/**
 * Created by Maia on 12/13/2016.
 */
var express = require('express');
var router = express.Router();
var Message = require('../models/message');
router.get('/', function(req,res,next){
    Message.find()
        .exec(function(err,messages){
            if(err){
                return res.status(500).json({
                    title: 'Something went wrong...',
                    message: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: messages
            });
        });
});
router.post('/', function (req, res, next) {
    var message = new Message({
        content: req.body.content
    });
    message.save(function(err,result){
        if(err){
            return res.status(500).json({
                title: 'Something went wrong...',
                error: err
            });
        }
        res.status(201).json({
            message: 'Message saved',
            obj: result
        });
    });
});
router.patch('/:id',function(req,res,next){
    Message.findById(req.params.id,function(err,message){
        if(err){
            return res.status(500).json({
                title: 'Something went wrong...',
                error: err
            });
        }
        if(!message){
            return res.status(500).json({
                title: 'Something went wrong...',
                error: {
                    message: 'Message not found'
                }
            });
        }
        message.content = req.body.content;
        message.save(function(err,result){
            if(err){
                return res.status(500).json({
                    title: 'Something went wrong...',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: result
            })
        })
    });
});
router.delete('/:id', function (req, res, next) {
    Message.findById(req.params.id,function(err,message){
        if(err){
            return res.status(500).json({
                title: 'Something went wrong...',
                error: err
            });
        }
        if(!message){
            return res.status(500).json({
                title: 'Something went wrong...',
                error: {
                    message: 'Message not found'
                }
            });
        }
        message.remove(function(err,result){
            if(err){
                return res.status(500).json({
                    title: 'Something went wrong...',
                    error: err
                });
            }
            res.status(201).json({
                message: 'Message deleted.',
                obj: result
            });
        });
    });
});
module.exports = router;