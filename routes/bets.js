var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://lijo:lijo@ds141524.mlab.com:41524/dbbetrisk', ['betHistory']);

// Get All bet History
router.get('/betsettled', function(req, res, next){
    db.betHistory.find(function(err, betsettled){
        if(err){
            res.send(err);
        }
        res.json(betsettled);
    });
});
// Get customer based Bet History
router.get('/betsettled/:id', function(req, res, next){
  console.log(req.params.id);
  var v=req.params.id;
    db.betHistory.find({customer:Number(v)}, function(err, betsettled){
        if(err){
            res.send(err);
        }
        res.json(betsettled);
    });
});


// Get All bet History
router.get('/betunsettled', function(req, res, next){
    db.betdata.find(function(err, betdata){
        if(err){
            res.send(err);
        }
        res.json(betdata);
    });
});
// Get customer based Bet History
router.get('/betunsettled/:id', function(req, res, next){
  console.log(req.params.id);
  var v=req.params.id;
    db.betdata.find({customer:Number(v)}, function(err, betdata){
        if(err){
            res.send(err);
        }
        res.json(betdata);
    });
});
module.exports = router;