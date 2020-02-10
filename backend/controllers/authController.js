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
      }
    });
  }
  main().catch(console.error);
};

// const { createCv } = require("./cvController");
exports.signup = async (req, res) => {
  try {
    req.body = req.body.data;
    const newUser = await User.create(req.body);
    newCv = await Cv.create({ user_id: newUser._id });
    // Cv.create();

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
      res.json({ err });
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
    user.password = undefined;
    //  If  everything ok , create token and send it to client
    const token = signToken(user._id, process.env.JWT_SECRET);
    res.status(200).json({
      status: "success",
      token,
      user
    });
  } catch (err) {
    // catch err if any
    console.log(err);
    res.json({ err });
  }
};

exports.protectUser = async (req, res, next) => {
  try {
    const decoded = await promisify(jwt.verify)(
      req.headers.token,
      process.env.JWT_SECRET
    );
    req.userData = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Auth failed" });
  }
};

exports.signupCompany = async (req, res) => {
  try {
    // console.log(req.body);
    const newCompany = await Company.create(req.body.data);
    const token = signToken(newCompany._id, process.env.JWT_SECRET);
    // res.json({ newCompany });

    const verifeToken = signToken(newCompany._id, "emailsecter"); // this toke is for verification
    const url = `http://localhost:8080/api/company/confirmation-company/${verifeToken}`;
    const message = "Submite to verife your company account";
    // Send email verification
    try {
      await sendEmail({
        email: newCompany.email,
        subject: "Verife",
        message,
        text: url,
        html: `
        <h1>Hello, ${newCompany.name}</h1>
        <p>Please verife your account to login and be part of our plateform</p>
        <a href='${url}'>CLICK HERE</a>
        <p>If you are not interrseting just ignore this email</p>
        `
      });
      newCompany.verifyToken = verifeToken;

      await newCompany.save({ validateBeforeSave: false });
      res.json({ status: "sucess", email: "sent!" });
    } catch (err) {
      console.log(err);
      res.json({ err });
    }
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
};

exports.verifeCompany = async (req, res) => {
  try {
    const company = await Company.findOne({ verifyToken: req.params.id });
    console.log(company);
    if (company) {
      company.verife = true;
      await company.save({ validateBeforeSave: false });
    }
    res.json({ message: company.name + " verifed" });
  } catch (err) {
    res.json({ err });
  }
};
exports.loginCompany = async (req, res) => {
  try {
    const company = await Company.findOne({
      email: req.body.CompanyEmail
    }).select("+password");
    console.log(req.body);
    const correctPass = await company.comparePassword(
      req.body.password,
      company.password
    );
    if (!correctPass) {
      res.json({ message: "wrong company Email or password" });
    }
    const token = signToken(company._id, process.env.JWT_SECRET);

    res.json({ token, email: company.email });
  } catch (err) {
    console.log(err);
    res.json({
      err
    });
  }
};

exports.forgetPassword = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.data.email });
    if (!user) {
      res.status(404).json({ message: "User not found!" });
    }

    const url = `http://localhost:3000/Employee/forgetpasswordConfirmation`;
    const message = "Submite to verife your company account";
    console.log(user.email);
    try {
      await sendEmail({
        email: user.email,
        subject: "Forget Password",
        message,
        text: url,
        html: `
        <h1>Hello, ${user.name}</h1>
        <p>If you really forget your password you can chenge it the link below</p>
        <a href='${url}'>CLICK HERE</a>
        <p>If you are not interrseting just ignore this email</p>
        `
      });

      res.json({ status: "sucess", email: "sent!" });
    } catch (err) {
      console.log(err);
      res.json({ err });
    }
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
};

exports.generateID = async (req, res) => {
  try {
    console.log(req.body);
    const token = req.body.token;
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    res.json({ id: decoded.id });
  } catch (err) {
    res.json({ err });
  }
};
