const jobOffer = require("../models/JobOfferModel");
require("../models/CompanyModel");

const _ = require("underscore");
exports.addPost = async (req, res) => {
  try {
    req.body.companyName = req.params.id;
    const newPost = await jobOffer.create(req.body);
    res.status(201).json({
      data: { newPost }
    });
  } catch (err) {
    res.json({ err });
  }
};

exports.findAll = async (req, res) => {
  try {
    const result = await jobOffer
      .find({})
      .sort({
        createdAt: -1
      })
      .populate("companyName", ["name"]);
    res.status(201).json(result);
  } catch (err) {
    res.json({ err });
  }
};

exports.findOne = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await jobOffer
      .findById(id)
      .populate("companyName", ["name", "description"]);
    res.status(201).json({
      data: result
    });
    console.log(result.companyName.name);
  } catch (err) {
    res.json({ err });
  }
};

exports.findAndDelete = async (req, res) => {
  try {
    const id = req.params.id;
    await jobOffer.findByIdAndRemove(id);
  } catch (err) {
    res.json({ err });
  }
};

exports.findAndUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedPost = await jobOffer.findByIdAndUpdate(id, req.body);
    res.json({
      data: { updatedPost }
    });
  } catch (err) {
    res.json({ err });
  }
};

exports.search = async (req, res) => {
  try {
    const skills = req.body.skills.split(" ");
    const location = req.body.location;
    const offers = await jobOffer.find({
      location,
      "skillRequired.name": {
        $in: skills
      }
    });
    res.send(offers);
  } catch (err) {
    res.json({ err });
  }
};
