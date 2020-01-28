const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

const userRouter = require("./routes/userRouter");
const companypostRouter = require("./routes/companyPostRouter");
const cvRouter = require("./routes/cvRouter");

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//ROUTES

app.use("/api/v1/users", userRouter);
app.use("/api/post", companypostRouter);
app.use("/api/v1/cvs", cvRouter);

module.exports = app;
