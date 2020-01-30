const User = require("./../models/UserModel");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
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
        user: process.env.GMAIL,
        pass: process.env.GMAIL_PASSWORD
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

exports.signup = async (req, res) => {
  try {
    const newUser = await User.create(req.body);

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

// // send mail with defined transport object
// let info = await transporter.sendMail({
//   from: "Wazzaka-Team <dandenhamza@yahoo.com>", // sender address
//   to: newUser.email, // list of receivers
//   subject: "verife your account", // Subject line
//   text: "Verife your account", // plain text body
//   html: `<a href='${url}'>Click here to verife you account</a>` // html body
// });

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email }).select("+password");

    if (!user.active) {
      res.json({
        err: "verife your email to log in"
      });
    }

    // check if user exist and for the password correct or not
    if (!user || !(await user.correctPassword(password, user.password))) {
      res.json({
        err: "verife your email to log in"
      });
    }

    //  If  everything ok , create token and send it to client
    const token = signToken(user._id, "passSecret");
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
