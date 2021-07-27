const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    name: String,
    comment: String,
    feedback_id: { type: Schema.Types.ObjectId, ref: "Feedback" },
})

module.exports = mongoose.model("Comment", CommentSchema);