const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

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
  photo: { type: String, default: "None" },
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
  expertise: String, // junior or senior
  appliedJobs: [
    {
      job: {
        type: mongoose.Schema.ObjectId,
        ref: "JobOffer"
      },
      status: {
        type: String,
        default: "Pending"
      }
    }
  ],
  userCv: {
    type: mongoose.Schema.ObjectId,
    ref: "CV"
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  active: {
    type: Boolean,
    default: false
  },
  verifeToken: String
});

UserSchema.pre("save", async function(next) {
  // Only run this function if password was actually modified
  if (!this.isModified("password")) return next();

  // hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

// This is an insteans method will  available for this collection
UserSchema.methods.correctPassword = async function(
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
