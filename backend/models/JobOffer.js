const validator = require("validator");
const mongoose = require("mongoose");

const JobOfferSchema = new mongoose.Schema({
  title: {
    type: String
    // required: [true, "Please Tell us your Post name"]
  },
  description: {
    type: String,
    required: [true, "Please provide us your post Bio"]
  },
  companyName: {
    type: mongoose.Schema.ObjectId,
    ref: "Company"
  },
  skillRequired: [
    {
      name: String,
      level: String
    }
  ],
  condidates: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User"
    }
  ],
  sponsored: {
    type: Boolean,
    default: false
  },
  expired: {
    type: Boolean,
    default: false
  },
  salaryMin: Number,
  salaryMax: Number,
  expirationDate: Date, // expiration date
  cratedAt: new Date()
});

const JobOffer = mongoose.model("JobOffer", JobOfferSchema);

module.exports = JobOffer;
