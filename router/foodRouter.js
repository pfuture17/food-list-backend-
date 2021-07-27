const express = require("express");
const router = express.Router();
const Food = require("../models/Food");

router.get("/", function(req, res) {
    Food.find({}, function( err, data) {
        res.send(data);
    });
});

router.post("/", function( req, res) {
    let newFood = new Food(req.body);
    newFood.save(). then(function(data) {
        res.send(data);
    });
});

router.delete("./:_id", function(req, res){
    Food.findByIdAndDelete(req.params._id).then( function(data) {
        res.data(data);
    })
});

module.exports = router;