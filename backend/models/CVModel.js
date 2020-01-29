const mongoose = require("mongoose");

const CVSchema = new mongoose.Schema({
  education: [Object],
  skills: [Object],
  language: [Object],
  user: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User"
    }
  ]
});

const CV = mongoose.model("CV", CVSchema);

module.exports = CV;
