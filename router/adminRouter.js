const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");


router.get("/", function (req, res) {
	Admin.find({}, function (err, data) {
		res.send(data);
	});
});


router.post("/", function( req, res) {
    let newAdmin = new Admin(req.body);
    newAdmin.save(). then(function(data) {
        res.send(data);
    });
});


module.exports = router;