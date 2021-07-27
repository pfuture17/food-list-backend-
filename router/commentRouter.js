const express = require("express");
const router = express.Router();
const Comment = require("../models/Comment");

router.get("/", function (req, res) {
	Comment.find({}, function (err, data) {
		res.send(data);
	});
});


router.post("/", function( req, res) {
    let newComment = new Comment(req.body);
    newComment.save(). then(function(data) {
        res.send(data);
    });
});

router.delete("/:_id", function(req, res){
    Comment.findByIdAndDelete(req.params._id)
    .then( function(data) {
        res.send(data);
    })
});


module.exports = router;