const mongoose = require("mongoose");

const CVSchema = new mongoose.Schema({
  education: [
    {
      start: Date,
      end: Date,
      diploma: String,
      degree: String,
      establishment: String // university or trainning center
    }
  ],
  experience: [
    {
      start: Date,
      end: Date,
      companyName: String,
      position: String,
      task: String
    }
  ],
  skills: [
    {
      name: String,
      level: String
    }
  ],
  language: [
    {
      name: String,
      level: String
    }
  ],
  user_id: {
    type: mongoose.Schema.ObjectId,
    ref: "User"
  },
  theme: String //profile theme
});

const CV = mongoose.model("CV", CVSchema);

module.exports = CV;
