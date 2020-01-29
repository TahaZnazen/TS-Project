const User = require("./../models/UserModel");
const jwt = require("jsonwebtoken");

// signToken will create a token to the user take the id of the user
const signToken = id => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

exports.signup = async (req, res) => {
  try {
    // Create the user and his Token
    const newUser = await User.create(req.body);
    const token = signToken(newUser._id);

    // Send the Token and the user
    res.status(201).json({
      status: "success",
      token,
      data: {
        user: newUser
      }
    });
    // send err if any
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email }).select("+password");
    console.log(password);
    // check if user exist and for the password correct or not
    if (!user || !(await user.correctPassword(password, user.password))) {
      throw new Error("Email password wrong");
    }

    //  If  everything ok , create token and send it to client
    const token = signToken(user._id);
    res.status(200).json({
      status: "success",
      token
    });
  } catch (err) {
    // catch err if any
    console.log(err);
    res.json({ err });
  }
};
