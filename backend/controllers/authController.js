const User = require("./../models/UserModel");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const Cv = require("./../models/CVModel");
const { promisify } = require("util");
const Company = require("./../models/CompanyModel");
// signToken will create a token to the user take the id of the user
const signToken = (id, secret) => {
  return jwt.sign({ id: id }, secret, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

const sendEmail = option => {
  async function main() {
    const transport = nodemailer.createTransport({
      host: process.env.HOST,
      port: 587,
      secure: false,
      auth: {
        user: "mrawebsami@gmail.com",
        pass: "samisamimraweb"
      },
      tls: {
        rejectUnauthorized: false
      }
    });
    console.log("this is send to ", option.email);
    const mailOptions = {
      from: "Wazzaka-Team", // sender address
      to: option.email, // list of receivers
      subject: option.subject, // Subject line
      text: option.text, // plain text body
      html: option.html // html body
    };

    transport.sendMail(mailOptions, function(err, data) {
      if (err) {
        console.log("this is the error ", err);
      } else {
        console.log("email sent!");
      }
    });
  }
  main().catch(console.error);
};

// const { createCv } = require("./cvController");
exports.signup = async (req, res) => {
  try {
<<<<<<< HEAD
    const newUser = await User.create(req.body);
    newCv = await Cv.create({ user_id: newUser._id });
    // Cv.create();
=======
    console.log(req.body.data);

    const newUser = await User.create(req.body.data);
>>>>>>> f85bdfa6f88c1d4c32ac20a56f369987e8067393

    const token = signToken(newUser._id, process.env.JWT_SECRET); // This token for autheraztion
    const verifeToken = signToken(newUser._id, "emailsecter"); // this toke is for verification
    const url = `http://localhost:8080/confirmation/${verifeToken}`;
    const message = "Submite to verife your account";
    // Send email verification
    try {
      await sendEmail({
        email: newUser.email,
        subject: "Verife",
        message,
        text: url,
        html: `
        <h1>Hello, ${newUser.name}</h1>
        <p>Please verife your account to login and be part of our plateform</p>
        <a href='${url}'>CLICK HERE</a>
        <p>If you are not interrseting just ignore this email</p>
        `
      });
    } catch (err) {
      console.log(err);
    }

    newUser.verifeToken = verifeToken;
    await newUser.save({ validateBeforeSave: false });
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
    // const { email, password } = req.body;

    const user = await User.findOne({ email: req.body.data.email }).select(
      "+password"
    );
    if (!user.active) {
      res.json({
        err: "verife your email to log in"
      });
    }

    // check if user exist and for the password correct or not
    if (
      !user ||
      !(await user.correctPassword(req.body.data.password, user.password))
    ) {
      res.json({
        err: "verife your email to log in"
      });
    }
    //  If  everything ok , create token and send it to client
    const token = signToken(user._id, process.env.JWT_SECRET);
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

exports.protectUser = async (req, res, next) => {
  try {
    if (!req.headers.token) {
      res.json({ message: "login please" });
    }

    // we promesify this to escape from callback hell
    const decoded = await promisify(jwt.verify)(
      req.headers.token,
      process.env.JWT_SECRET
    );

    const user = await User.findOne({ _id: decoded.id });
    // res.json({ user });
    if (user) {
      next;
    }
  } catch (err) {
    res.json({ err });
  }

  next();
}; // protect need some refactor

exports.signupCompany = async (req, res) => {
  try {
    const newCompany = await Company.create(req.body);
    const token = signToken(newCompany._id, process.env.JWT_SECRET);
    res.json({ newCompany });
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
};

exports.loginCompany = async (req, res) => {
  try {
    const company = await Company.findOne({ email: req.body.email }).select(
      "+password"
    );
    const correctPass = await company.comparePassword(
      req.body.password,
      company.password
    );
    if (!correctPass) {
      res.json({ message: "wrong company Email or password" });
    }
    const token = signToken(company._id, process.env.JWT_SECRET);

    res.json({ message: "degla", token, email: company.email });
  } catch (err) {
    console.log(err);
    res.json({
      err
    });
  }
};
