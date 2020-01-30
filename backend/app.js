const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const jwt = require("jsonwebtoken");
const User = require("./models/UserModel");
const userRouter = require("./routes/userRoute");
const jobOfferRoute = require("./routes/jobOfferRoute");
const cvRouter = require("./routes/cvRouter");

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//ROUTES
app.get("/confirmation/:token", async (req, res) => {
  try {
    const user = jwt.verify(req.params.token, "emailsecter");
    const test = await User.findOneAndUpdate(
      { _id: user.id },
      { active: true }
    );

    res.json({
      message: "account verifed!"
    });
  } catch (err) {
    res.json({ err });
  }
  // user.active = true;
  // await User.findOneAndUpdate();
});
app.use("/api/v1/users", userRouter);
app.use("/api/post", jobOfferRoute);
app.use("/api/v1/cvs", cvRouter);

module.exports = app;
