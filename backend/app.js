const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

const userRouter = require("./routes/userRouter");
const companypostRouter = require("./routes/companyPostRouter");

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//ROUTES

app.use("/api/v1/users", userRouter);
app.use("/api/post", companypostRouter);
module.exports = app;
