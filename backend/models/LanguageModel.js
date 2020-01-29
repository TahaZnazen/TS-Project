const mongoose = require("mongoose");
const User = require("./UserModel");
const LanguageSchema = new mongoose.Schema({
  language: String,
  level: String,
  User: [{}]
});

const language = mongoose.model("language", userSchema);

module.exports = language;
