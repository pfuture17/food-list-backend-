const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
    name: String,
    type: String,
    details: String,
    votes: Number,
    food_id:{ type: Schema.Types.ObjectId, ref: "Food" },
})

module.exports = mongoose.model("Feedback", FeedbackSchema);