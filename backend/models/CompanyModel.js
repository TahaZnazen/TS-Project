const validator = require("validator");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const CompanySchema = new mongoose.Schema({
  name: {
    type: String
    // required: [true, "Please Tell us your company name"]
  },
  email: {
    type: String,
    // required: [true, "Please provide us your email"],
    unique: true,
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
  createdAt: {
    type: Date,
    default: Date.now
  },
  verifeEmail: String,
  verife: { type: Boolean, default: false },
  verifyToken: String
});

CompanySchema.pre("save", async function(req, res, next) {
  // Only run this function if password was actually modified
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  next();
});

CompanySchema.methods.comparePassword = async function(
  candidatePassword,
  userPassword
) {
  try {
    // return await bcrypt.compare(candidatePassword, userPassword);
    return await bcrypt.compare(candidatePassword, userPassword);
  } catch (err) {
    console.log(err);
  }
};

const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;
