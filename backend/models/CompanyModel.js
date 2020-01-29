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
  nationality: {
    type: String
    // required: [true, "Please proivde your nationality"]
  },
  location: {
    type: String
    // required: [true, "Please proivde your location"]
  }
});

const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;
