const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
    name: String,
    details: String,
    image: String,
    votes: Number
})

module.exports = mongoose.model("Food", FoodSchema);