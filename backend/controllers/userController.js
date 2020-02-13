const user = require("../models/UserModel");
const offer = require("../models/JobOfferModel");
const cv = require("../models/CVModel");
const path = require("path");
const Company = require("./../models/CompanyModel");
const multer = require("multer");

const multerStorage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "public/img/users");
  },
  filename: (req, file, cb) => {
    // user-userID-Timestamp.ext
    const ext = file.mimetype.split("/")[1];

    cb(null, `user-${req.params.id}-${Date.now()}.${ext}`);
  }
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("Not an image! Please upload only images."), false);
  }
};
const upload = multer({ storage: multerStorage, fileFilter: multerFilter });
exports.uploadUserPhoto = upload.single("photo");

exports.updateUser = async (req, res) => {
  console.log(req.file);
  try {
    if (req.file) {
      req.body.photo = `http://localhost:8080/api/users/image/${req.file.filename}`;
    }
    // console.log(req.body.photo);
    const test = await user.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.json({ message: "user updated" });
  } catch (err) {
    // console.log(err);
    res.json({ err });
  }
};

exports.getimg = (req, res) => {
  res.sendFile(path.resolve(__dirname, `./../public/img/users`, req.params.id));
};

exports.findAllUsers = async (req, res) => {
  try {
    const users = await user.find({});
    res.status(201).json(users);
  } catch (err) {
    res.json(err);
  }
};
exports.findOneUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userToFind = await user.findById(id);
    res.status(201).json(userToFind);
  } catch (err) {
    res.json(err);
  }
};

exports.matchingRate = async (req, res) => {
  try {
    const id = req.params.id;
    const offers = await offer.find({});
  } catch (err) {
    res.json({ err });
  }
};

exports.findJobs = async (req, res) => {
  try {
    const id = req.params.id;
    const jobs = await user.findById(id).populate("appliedJobs.job");
    res.json({ data: jobs });
  } catch (err) {
    console.log(err);
    res.json({ message: "err" });
  }
};

exports.updatePassword = async (req, res) => {
  try {
    const User = await user.findById(req.params.id).select("+password");
    const iscorrect = await User.correctPassword(
      req.body.password,
      User.password
    );
    if (iscorrect) {
      User.password = req.body.newPassword;
      await User.save();
      res.json({ message: "password changed" });
    }

    res.status(200).json({ message: "wrong password" });
  } catch (err) {
    console.log(err);
    res.json({ message: "fail" });
  }
};

exports.forgetUpdatePassword = async (req, res) => {
  try {
    const User = await user.findOne({ email: req.body.data.email });
    User.password = req.body.data.password;
    await User.save({ validateBeforeSave: false });
    console.log("Password Updated");
    res.json({ password: "updated" });
  } catch (err) {
    res.json({ err });
  }
};
// api to fetch user applied job by details of job and comapnay
exports.getJobsBydetailsAndCompanyDetails = async (req, res) => {
  try {
    const User = await user.findById(req.params.id).populate([
      {
        path: "appliedJobs.job",
        model: "JobOffer",

        populate: {
          path: "companyName",
          model: "Company"
        }
      }
    ]);

    res.json({ User });
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
};
