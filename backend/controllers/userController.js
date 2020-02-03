const user = require("../models/UserModel");
const offer = require("../models/JobOfferModel");
const cv = require("../models/CVModel");

const multer = require("multer");

const multerStorage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "public/img/users");
  },
  filename: (req, file, cb) => {
    // user-userID-Timestamp.ext
    const ext = file.mimetype.split("/")[1];
    // console.log(req);
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
  try {
    if (req.file) {
      console.log("hii");
      req.body.photo = req.file.filename;
    }
    const test = await user.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.json({ message: "user updated" });
  } catch (err) {
    // console.log(err);
    res.json({ err });
  }
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
