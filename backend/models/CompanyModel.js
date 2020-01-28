const validator = require("validator");
const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  name: {
    type: String
    // required: [true, "Please Tell us your company name"]
  },
  email: {
    type: String,
    // required: [true, "Please provide us your email"],
    uniquie: true,
    validate: [validator.isEmail, "Please provide a valid email"]
  },
  password: {
    type: String,
    // required: [true, "Please provide a password"],
    minlength: 8,
    // select false to hide the password and will never show up in any output
    select: false
  },
  photo: String,
  phone: {
    type: String
    // required: [true, "Please provide us your phone number"]
  },
  location: {
    type: String
    // required: [true, "Please proivde your location"]
  },
  description: String,
  jobOffers: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "JobOffer"
    }
  ],
  premium: {
    type: Boolean,
    default: false
  },
  cratedAt: new Date() // company profile creation date
});

const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;
