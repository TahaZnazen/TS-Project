const user = require("../models/UserModel");
const offer = require("../models/JobOfferModel");
const cv = require("../models/CVModel");
const path = require("path");

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
      req.body.photo = `http://localhost:8080/api/users/image/${req.file.filename}`;
    }
    console.log(req.body.photo);
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

// exports.getUserImg = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const User = await user.findById(id);
//     console.log("public/img/users/" + User.photo);
//     const { photo } = User;

//     res
//       .status(200)
//       .json({ photo: "http://localhost:8080/public/img/users/" + photo });
//   } catch (err) {
//     console.log(err);
//   }
// };

// exports.getimg = async (req, res) => {
//   try {
//     const imgPath = req.params.imgPath;
//     // console.log(imgPath);
//     // const img = require("./../public/img/users/" + imgPath);
//     const img = path.join(__dirname, `/../public/img/users/${imgPath}`);
//     const img1 = require(img);
//     console.log(img1, "this is the img");
//     res.json({ img1 });
//   } catch (err) {
//     res.json({ err });
//   }
// };
