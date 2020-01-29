const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const GitHubStrategy = require("passport-github").Strategy;
const userRoute = require("./routes/userRoute");
const passport = require("passport");
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Auth with github test.

let user = {};

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.use(
  new GitHubStrategy(
    {
      clientID: "ca07c74962097b8480f6", // github client ID
      clientSecret: "a9428e7a75c59e24a32c0f473da2dbd42d5fbb89", // github client secret
      callbackURL: "auth/github/callback"
    },
    (accessToken, refreshToken, profile, cb) => {
      // add to db later
      console.log(JSON.stringify(profile));
      console.log(accessToken);
      user = { ...profile };
      return cb(null, profile);
    }
  )
);

app.get("/auth/github", passport.authenticate("github"));

app.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  function(req, res) {
    // Successful authentication, redirect home.
    console.log("done");
    res.redirect("/");
  }
);

// this is just for test:
app.get("/user-test", (req, res) => {
  console.log("getting data");
  res.json({
    user
  });
});
//ROUTES

app.use("/api/users", userRoute);

module.exports = app;
