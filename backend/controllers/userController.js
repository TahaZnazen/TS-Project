const user = require("../models/UserModel");
const offer = require("../models/JobOfferModel");
const cv = require("../models/CVModel");
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
