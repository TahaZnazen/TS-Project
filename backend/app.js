const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

const userRouter = require("./routes/userRouter");
const jobOfferRoute = require("./routes/jobOfferRoute");
const cvRoute = require("./routes/cvRoute");

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//ROUTES

app.use("/api/v1/users", userRouter);
app.use("/api/post", jobOfferRoute);
app.use("/api/cvs", cvRoute);

module.exports = app;
