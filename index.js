const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const foodRouter = require("./router/foodRouter");
const adminRouter = require("./router/adminRouter");
const feedbackRouter = require("./router/feedbackRouter");
const commentRouter = require("./router/commentRouter")

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/foodlist", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});

app.use("/foods", foodRouter);
app.use("/admins", adminRouter);
app.use("/feedbacks", feedbackRouter);
app.use("/comments", commentRouter);

app.listen(port, () => {
	console.log(`app is listening at port ${port}`);
});