const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Tell us your name"]
  },
  email: {
    type: String,
    required: [true, "Please provide us your email"],
    uniquie: true,
    validate: [validator.isEmail, "Please provide a valid email"]
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
    // select false to hide the password and will never show up in any output
    select: false
  },
  passwordConfirmation: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      // this only works on CREATE and SAVE!!
      validator: function(el) {
        return this.password === el;
      },
      message: "Password are not the same!"
    }
  },
  photo: String,
  phone: {
    type: String,
    required: [true, "Please provide us your phone number"]
  },
  nationality: {
    type: String,
    required: [true, "Please proivde your nationality"]
  },
  gender: {
    type: String,
    required: [true, "Please proivde your gender"]
  },
  location: {
    type: String,
    required: [true, "Please proivde your location"]
  },

  companyPost: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "CompanyPost"
    }
  ]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
