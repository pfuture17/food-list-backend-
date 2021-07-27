const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");

router.get("/", function(req, res) {
    Feedback.find({})
        .populate('food_id')
        .exec()
        .then((data) => {
            res.send(data)
    })
});

router.post("/", function( req, res) {
    let newFeedback = new Feedback(req.body);
    newFeedback.save().then(function(data) {
        data
            .populate("food_id")
            .execPopulate()
            .then(data => res.send(data))
    });
});

router.put("/:_id", function (req, res) {
	Feedback
		.findByIdAndUpdate(req.params._id, req.body, {
			new: true,
		})
		.then(function (data) {
            data
            .populate("food_id")
            .execPopulate()
            .then(data => res.send(data))
		});
});

router.delete("/:_id", function(req, res){
    Feedback.findByIdAndDelete(req.params._id)
    .then( function(data) {
        res.send(data);
    })
});

module.exports = router;