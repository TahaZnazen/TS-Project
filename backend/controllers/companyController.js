const company = require("../models/CompanyModel");
const offers = require("../models/JobOfferModel");
const User = require("../models/UserModel");
const ObjectId = require("mongoose").Types.ObjectId;
const nodemailer = require("nodemailer");
exports.addCompany = async (req, res) => {
  try {
    const newCompany = await company.create(req.body);
    res.status(201).json({
      data: { newCompany }
    });
  } catch (err) {
    res.json({ err });
  }
};
exports.updateCompany = async (req, res) => {
  try {
    console.log(req.body);
    if (req.file) {
      req.body.photo = req.file.filename;
    }
    // const test = await user.findOneAndUpdate({ _id: req.params.id }, req.body);
    const id = req.params.id;
    const updateCompany = await company.findByIdAndUpdate(id, req.body);
    res.json({
      data: { updateCompany }
    });
  } catch (err) {
    res.json({ err });
  }
};
exports.topCompanies = async (req, res) => {
  try {
    const top5 = await company
      .find({})
      //   .sort({ jobOffers: jobOffers.length })
      .limit(5);
    res.status(201).json({
      data: top5
    });
  } catch (err) {
    res.json({ err });
  }
};
exports.findOffers = async (req, res) => {
  try {
    const id = req.params.id;
    const companyToShowOffers = await company
      .findById(id)
      .populate("jobOffers");
    res.status(201).json(companyToShowOffers.jobOffers);
  } catch (err) {
    res.json({ err });
  }
};
exports.findCompany = async (req, res) => {
  try {
    const id = req.params.id;
    const companyToShow = await company.findById(id);
    res.status(201).json({ data: companyToShow });
  } catch (err) {
    res.json({ err });
  }
};
exports.CompanyOffersCandidates = async (req, res) => {
  try {
    const companyId = req.params.id;
    const OffersPostedByTheCompany = await offers
      .find({ companyName: companyId })
      .populate("candidates");

    res.json({ OffersPostedByTheCompany });
  } catch (err) {
    res.json({ err });
  }
};

exports.acceptUser = async (req, res) => {
  try {
    const user = await User.findById(req.body.userId);
    const Company = await company.findById(req.body.companyId);
    const job = await offers.findById(req.body.jobId);
    const date = req.body.date;
    const message =
      req.body.message ||
      `You have been accepeted on a ${job.title} that you applied on the company "${Company.name}" and your interview date is ${date} get ready for the interview and good luck`;
    try {
      await sendEmail({
        email: user.email,
        subject: "Company response",
        message,
        html: `
        <h1>Hello, ${user.name}</h1>
        <p>${message}</p>`
      });
    } catch (err) {
      res.json({ err });
    }

    res.json({ email: "sent!" });
  } catch (err) {
    res.json({ err });
  }
};

exports.rejectUser = async (req, res) => {
  try {
    const user = await User.findById(req.body.userId);
    const Company = await company.findById(req.body.companyId);
    const job = await offers.findById(req.body.jobId);
    const message =
      req.body.message ||
      `Sorry for that but you have been rejected by ${Company.name}, on the job ${job.title}. better luck next time`;

    try {
      await sendEmail({
        email: user.email,
        subject: "Company response",
        message,
        html: `
         <h1>Hello, ${user.name}</h1>
         <p>${message}</p>
         
         `
      });
    } catch (err) {
      console.log(err);
    }
    res.json({ status: "good" });
  } catch (err) {
    console.log(err);
    res.json({ status: "fail" });
  }
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
