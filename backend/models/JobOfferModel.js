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
  location: String,
  companyName: {
    type: mongoose.Schema.Types.ObjectId,
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
  createdAt: {
    type: Date,
    default: Date.now
  },
  jobType: String
});

const JobOffer = mongoose.model("JobOffer", JobOfferSchema);

module.exports = JobOffer;
